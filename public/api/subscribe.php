<?php
// filepath: public/api/subscribe.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'db.php';

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

try {
    $database = new Database();
    $db = $database->getDb();
    
    // Prepare statement to prevent SQL injection
    $stmt = $db->prepare('INSERT INTO subscribers (email) VALUES (:email)');
    $stmt->bindValue(':email', $email, SQLITE3_TEXT);
    
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true, 
            'message' => 'Welcome to the #EVIXSquad! You have successfully subscribed.'
        ]);
    } else {
        throw new Exception('Execution failed');
    }

} catch (Exception $e) {
    // Check for unique constraint violation (duplicate email)
    // SQLite3 throws generic exceptions sometimes, so we might need to check error code or message
    $lastError = $db->lastErrorMsg();
    if (strpos($lastError, 'UNIQUE constraint failed') !== false) {
        echo json_encode(['success' => false, 'message' => 'You are already subscribed to our newsletter!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Something went wrong. Please try again later.']);
    }
}
?>
