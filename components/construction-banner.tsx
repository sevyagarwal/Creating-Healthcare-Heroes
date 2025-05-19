"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConstructionBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)

  useEffect(() => {
    // Check if the banner has been dismissed before
    const dismissed = localStorage.getItem("constructionBannerDismissed")
    if (!dismissed) {
      setIsVisible(true)
    } else {
      setHasBeenDismissed(true)
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    setHasBeenDismissed(true)
    // Save the dismissal in localStorage
    localStorage.setItem("constructionBannerDismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 top-20 z-50 flex justify-center px-4 py-3">
      <div className="relative max-w-4xl w-full bg-amber-50 border border-amber-200 rounded-lg shadow-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-amber-800">Website Under Construction</h3>
            <div className="mt-1 text-sm text-amber-700">
              <p>
                Thank you for visiting One Breath Ahead. Our website is currently under construction as we work to
                improve your experience. Some features may be limited or unavailable.
              </p>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={dismissBanner}
              className="rounded-md inline-flex text-amber-500 hover:text-amber-600 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
