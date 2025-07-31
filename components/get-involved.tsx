"use client"

import { useState } from "react"
import { HandHeart, Banknote, Users, Share2, Check, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GetInvolved() {
  const [copied, setCopied] = useState(false)

  // Function to copy the current URL to clipboard
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setCopied(true)
          // Reset the copied state after 2 seconds
          setTimeout(() => setCopied(false), 2000)
        })
        .catch((error) => {
          console.error("Error copying text: ", error)
        })
    }
  }

  return (
    <section id="get-involved" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Get Involved</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            There are many ways to support our mission and help save lives. Find the option that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-accent p-3 rounded-full w-fit mb-4">
                <HandHeart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Volunteer</CardTitle>
              <CardDescription>Share your time and skills</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Join our team of dedicated volunteers who help with training, events, administration, and more. No
                experience necessary - we'll train you!
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/volunteer">Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-accent p-3 rounded-full w-fit mb-4">
                <Banknote className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Donate</CardTitle>
              <CardDescription>Support our programs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your financial contribution helps us provide free training to underserved communities, develop
                resources, and expand our reach.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  document.getElementById("donation-form")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
              >
                Donate Now
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-accent p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Partner With Us</CardTitle>
              <CardDescription>Organizational collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We work with schools, businesses, community groups, and other organizations to bring life-saving
                training to their members.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-accent p-3 rounded-full w-fit mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Spread the Word</CardTitle>
              <CardDescription>Raise awareness</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Follow us on social media, share our content, and tell others about our mission. Awareness is the first
                step toward saving lives.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleCopyLink}
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                disabled={copied}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Copied!
                  </>
                ) : (
                  "Share Now"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div id="volunteer-opportunities" className="mt-16 bg-white p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Upcoming Volunteer Opportunities</h3>

          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Calendar className="h-16 w-16 text-primary/30 mb-4" />
            <h4 className="text-xl font-semibold text-primary mb-2">Coming Soon</h4>
            <p className="text-gray-600 max-w-lg">
              We're currently organizing our volunteer calendar. Check back soon for upcoming opportunities to make a
              difference in your community!
            </p>
            <div className="mt-6">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/volunteer">Register Interest</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Donation Form Section */}
        <div id="donation-form" className="mt-16 bg-white p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Make a Donation</h3>
          <p className="text-center text-gray-600 mb-8">
            Your contribution helps us bring life-saving education to more communities. Every dollar makes a difference
            in our mission to create a world where everyone has the skills to save a life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-4">Donation Amount</h4>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  $25
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  $50
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  $100
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  $250
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  $500
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  Other
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Amount
                  </label>
                  <input
                    type="number"
                    id="custom-amount"
                    placeholder="Enter amount"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="frequency" className="mr-2" defaultChecked />
                      <span>One-time</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="frequency" className="mr-2" />
                      <span>Monthly</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Your Information</h4>
              <div className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2">
              Complete Donation
            </Button>
            <p className="text-xs text-gray-500 mt-2">Your donation is tax-deductible to the extent allowed by law.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
