"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  size: number
  left: number
  animationDuration: number
  animationDelay: number
}

export function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20, // 20px to 80px
      left: Math.random() * 100, // 0% to 100%
      animationDuration: Math.random() * 15 + 15, // 15s to 30s
      animationDelay: Math.random() * 15, // 0s to 15s
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <style>{`
        @keyframes rise {
          0% {
            bottom: -100px;
            transform: translateX(0);
            opacity: 0;
          }
          25% {
            opacity: 0.4;
            transform: translateX(60px);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-60px);
          }
          75% {
            opacity: 0.4;
            transform: translateX(30px);
          }
          100% {
            bottom: 120%;
            transform: translateX(-20px);
            opacity: 0;
          }
        }
        .bubble {
          position: absolute;
          bottom: -100px;
          background: rgba(0, 91, 142, 0.08); /* Slightly more transparent for overlap */
          border-radius: 50%;
          border: 1px solid rgba(0, 91, 142, 0.15);
          animation: rise infinite ease-in-out; /* ease-in-out for smoother swaying */
        }
      `}</style>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}
