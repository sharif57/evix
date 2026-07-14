"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export function InteractiveBubbles({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 100 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Offset to center the bubble (half of 150px)
  const bubbleX = useTransform(springX, (val) => val - 75)
  const bubbleY = useTransform(springY, (val) => val - 75)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden bg-transparent pointer-events-none z-0", className)}
    >
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 w-full h-full opacity-50" style={{ filter: "url(#goo) blur(20px)" }}>
        {/* Big Centered Bubble */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[666px] h-[614px]"
          style={{
            x: "-50%",
            y: "-50%",
            background: "rgb(198, 142, 113)",
            boxShadow: "inset 0 0 100px rgba(255,255,255,0.3), inset 20px 20px 60px rgba(255,255,255,0.3)",
          }}
          animate={{
            scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
            x: ["-50%", "-45%", "-55%", "-48%", "-52%", "-50%"],
            y: ["-50%", "-55%", "-45%", "-52%", "-48%", "-50%"],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "40% 60% 60% 40% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "70% 30% 50% 50% / 30% 50% 70% 70%",
              "50% 50% 30% 70% / 50% 70% 30% 50%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Interactive Mouse Bubble */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[222px] h-[222px]"
          style={{
            x: bubbleX,
            y: bubbleY,
            background: "#279796",
            boxShadow: "inset 0 0 40px rgba(255,255,255,0.4), inset 10px 10px 30px rgba(255,255,255,0.4)",
          }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "40% 60% 60% 40% / 60% 30% 70% 40%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
