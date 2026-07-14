import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// File to store mock subscribers in dev mode
const MOCK_DB_PATH = path.join(process.cwd(), 'mock-subscribers.json')

export async function POST(request: Request) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const body = await request.json()
  const email = body.email

  console.log("📝 [DEV MODE] Mock Subscription:", email)

  // Validate email (mimic PHP's FILTER_VALIDATE_EMAIL)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({
      success: false,
      message: 'Please enter a valid email address.'
    })
  }

  // Load existing subscribers
  let subscribers: string[] = []
  if (fs.existsSync(MOCK_DB_PATH)) {
    try {
      const data = fs.readFileSync(MOCK_DB_PATH, 'utf-8')
      subscribers = JSON.parse(data)
    } catch (e) {
      // ignore error
    }
  }

  // Check for duplicate
  if (subscribers.includes(email)) {
    return NextResponse.json({
      success: false,
      message: 'You are already subscribed to our newsletter!'
    })
  }

  // Save new subscriber
  subscribers.push(email)
  fs.writeFileSync(MOCK_DB_PATH, JSON.stringify(subscribers, null, 2))

  // Simulate success
  return NextResponse.json({
    success: true,
    message: 'Welcome to the #EVIXSquad! You have successfully subscribed.'
  })
}
