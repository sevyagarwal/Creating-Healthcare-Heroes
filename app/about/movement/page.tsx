import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Globe, Lightbulb } from "lucide-react"

export default function MovementPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">The Movement</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We're building a global community of life-savers. Join thousands of individuals committed to creating safer
            communities through knowledge and preparedness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Be the First Responder Before 911 Arrives</h3>
                </div>
                <p className="text-lg font-medium text-gray-700 pl-12">
                  Because the first few minutes decide everything.
                </p>
                <p className="text-gray-600 pl-12">
                  Emergencies don't wait—and neither should we. By equipping kids with life-saving skills, you help
                  ensure that when crisis strikes, someone nearby already knows what to do. Join us in turning
                  bystanders into first responders, one school at a time.
                </p>
              </div>

              <div className="w-full h-px bg-gray-200 my-6"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Build Health Equity from the Ground Up</h3>
                </div>
                <p className="text-lg font-medium text-gray-700 pl-12">
                  Healthcare knowledge shouldn't be a privilege.
                </p>
                <p className="text-gray-600 pl-12">
                  In many communities, access to care is delayed or missing entirely. But education is powerful—and free
                  to spread. By supporting first aid education in underserved schools, you're breaking cycles of medical
                  helplessness and rewriting what's possible for every child.
                </p>
              </div>

              <div className="w-full h-px bg-gray-200 my-6"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Redefine What It Means to Save a Life</h3>
                </div>
                <p className="text-lg font-medium text-gray-700 pl-12">
                  A Band-Aid today can prevent heartbreak tomorrow.
                </p>
                <p className="text-gray-600 pl-12">
                  Saving a life doesn't always look like a hospital miracle. Sometimes, it's a child stopping a burn
                  from spreading or calming a choking classmate. When we teach healthcare early, we plant courage,
                  competence, and compassion into everyday moments.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="#get-involved">Join the Movement</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/classroom-training-movement.png"
                alt="Students attentively listening to an instructor in a classroom with blue walls"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Our Global Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">20,000+</div>
              <p className="text-gray-700">Students trained across the United States and India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">70+</div>
              <p className="text-gray-700">Schools and community centers reached</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">250+</div>
              <p className="text-gray-700">Documented cases of students applying their training in real emergencies</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Join the Movement</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Students participating in a training session"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Become a School Partner</h3>
              <p className="text-gray-700 mb-4">
                Bring our life-saving curriculum to your school or youth organization. Our programs are designed to
                integrate seamlessly with existing educational frameworks and can be tailored to different age groups.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="#contact">Contact Us to Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-semibold mb-4 text-primary">Volunteer or Donate</h3>
              <p className="text-gray-700 mb-4">
                Support our mission through volunteering your time or making a financial contribution. Every hour spent
                and every dollar donated helps us reach more children with life-saving education.
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="#get-involved">Get Involved Today</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Volunteers working with students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-accent/30 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">Spread the Word</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Help us grow the movement by sharing our mission with your network. Follow us on social media, share our
              content, and tell others about the importance of life-saving education for young people.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Share on Facebook
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-accent/50">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Share on Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
