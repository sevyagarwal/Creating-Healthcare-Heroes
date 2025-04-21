import { HandHeart, Banknote, Users, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GetInvolved() {
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
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Apply Now</Button>
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
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Donate Now</Button>
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
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Contact Us</Button>
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
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Share Now</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center text-primary">Upcoming Volunteer Opportunities</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-accent">
              <div>
                <h4 className="font-semibold text-primary">Community Training Day</h4>
                <p className="text-gray-600">Help us teach basic first aid to community members</p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className="text-gray-600 mr-4">June 15, 2024</span>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  Sign Up
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-accent">
              <div>
                <h4 className="font-semibold text-primary">School Program Assistants</h4>
                <p className="text-gray-600">Support our instructors at local schools</p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className="text-gray-600 mr-4">Ongoing</span>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  Sign Up
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-4">
              <div>
                <h4 className="font-semibold text-primary">Fundraising Event</h4>
                <p className="text-gray-600">Help organize our annual fundraising gala</p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className="text-gray-600 mr-4">July 22, 2024</span>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-accent/50">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
