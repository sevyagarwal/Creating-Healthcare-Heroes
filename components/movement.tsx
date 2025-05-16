import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Globe, Lightbulb } from "lucide-react"

export default function Movement() {
  return (
    <section id="movement" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">The Movement</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We're building a global community of life-savers. Join thousands of individuals committed to creating safer
            communities through knowledge and preparedness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
      </div>
    </section>
  )
}
