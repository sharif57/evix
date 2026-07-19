import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

// Added Playfair Display for headings and Lato for body text
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EVIX - Naturally Sourced Water | Premium Mineral Water from Nigeria",
  description:
    "EVIX naturally sourced still water from Nigeria. EVery you, EVeryone, EVeryWhere. Exceptional purity, low minerals, naturally low sodium. Perfect for daily hydration, baby formula, pregnancy, and kidney-friendly diets. Purity is our commitment.",
  keywords: [
    "EVIX water",
    "premium water Nigeria",
    "Nigeria mineral water",
    "naturally sourced water",
    "pyramid bottle water",
    "healthy hydration",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.webp", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.webp", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.webp", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.webp", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
