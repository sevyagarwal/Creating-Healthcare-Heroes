import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function VolunteerApplication() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#get-involved"
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Get Involved
          </Link>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6 text-primary text-center">Volunteer Application</h1>
            <p className="text-gray-600 mb-8 text-center">
              Join our team of dedicated volunteers who are making a difference in communities around the world. Fill
              out the form below to get started on your journey with One Breath Ahead.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Street Address"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="State/Province"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="ZIP/Postal Code"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Training & Education</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Event Support</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Administrative</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Marketing & Communications</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Fundraising</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Community Outreach</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Weekday Mornings</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Weekday Afternoons</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Weekday Evenings</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Weekends</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Please describe any relevant experience or skills you have that would be valuable for volunteering with us."
                ></textarea>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 10MB)</p>
                    </div>
                    <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="hear-about" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="hear-about"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Please select</option>
                  <option value="social-media">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="event">Event</option>
                  <option value="search">Search Engine</option>
                  <option value="news">News Article</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </label>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-2">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
