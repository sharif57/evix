<?php
// filepath: public/api/db.php

// Prevent direct access to this file
if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
    header('HTTP/1.0 403 Forbidden');
    exit;
}

class Database {
    private $db;
    private $dbFile = '../../evix_data.db'; // Store outside public root if possible, but for static export hosting usually root is safer or a protected folder. 
    // For simple FTP hosting of 'out' folder, the DB will likely be in the same folder or one level up. 
    // Let's put it in the root of the deployment for now.
    
    public function __construct() {
        try {
            // Create/Open database
            $this->db = new SQLite3('evix.db');
            $this->initializeTables();
        } catch (Exception $e) {
            die(json_encode(['success' => false, 'message' => 'Database connection failed']));
        }
    }

    private function initializeTables() {
        // Subscribers Table
        $this->db->exec("CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'active'
        )");

        // Posts Table (for future blog)
        $this->db->exec("CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            content TEXT,
            excerpt TEXT,
            published_at DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )");
    }

    public function getDb() {
        return $this->db;
    }
}
?>
