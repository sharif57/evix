"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get("email")

    try {
      // Use mock endpoint in development, PHP endpoint in production
      const endpoint = process.env.NODE_ENV === "development" 
        ? "/api/mock-subscribe" 
        : "/api/subscribe.php"

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Subscribed!", {
          description: result.message,
          duration: 5000,
          style: {
            background: "#005B8E",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
          },
        })
        form.reset()
      } else {
        toast.error("Subscription failed", {
          description: result.message,
          style: {
            background: "#ef4444",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
          },
        })
      }
    } catch (error) {
      toast.error("Error", {
        description: "Something went wrong. Please try again later.",
        style: {
          background: "#ef4444",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.2)",
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 flex-1"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="bg-[#C68E71] hover:bg-[#B37D61] text-white px-8 min-w-[120px]"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  )
}
