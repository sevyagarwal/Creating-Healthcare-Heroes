"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ChangeNotificationPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the popup has been dismissed before
    const dismissed = localStorage.getItem("changeNotificationDismissed")
    const lastShown = localStorage.getItem("changeNotificationLastShown")
    const now = Date.now()
    const oneDayInMs = 24 * 60 * 60 * 1000

    // Show popup if never dismissed or if it's been more than a day since last shown
    if (!dismissed || (lastShown && now - Number.parseInt(lastShown) > oneDayInMs)) {
      // Small delay to ensure page has loaded
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }
  }, [])

  const dismissPopup = () => {
    setIsVisible(false)
    localStorage.setItem("changeNotificationDismissed", "true")
    localStorage.setItem("changeNotificationLastShown", Date.now().toString())
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto animate-in fade-in-0 zoom-in-95 duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-amber-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Website Updates in Progress</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We're currently making improvements to enhance your experience on our website. Some features may be
                  temporarily unavailable or may look different as we work to better serve our community.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Thank you for your patience as we continue our mission to teach life-saving skills and empower
                  communities.
                </p>
                <div className="flex justify-end">
                  <Button onClick={dismissPopup} className="bg-red-600 hover:bg-red-700">
                    Got it, thanks!
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={dismissPopup}
                className="flex-shrink-0 h-6 w-6 rounded-full hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
