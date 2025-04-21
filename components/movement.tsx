import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Movement() {
  return (
    <section id="movement" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">The Movement</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We're building a global community of life-savers. Join thousands of individuals committed to creating safer
            communities through knowledge and preparedness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Why Join Our Movement?</h3>
            <p className="text-gray-700 mb-6">
              Being part of our movement means being part of a community that values human life and is committed to
              protecting it. Together, we're creating a world where everyone has the knowledge and confidence to save
              lives.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary">Connect with Like-minded People</h4>
                  <p className="text-gray-600">
                    Meet others who share your passion for helping and making a difference.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary">Access Exclusive Resources</h4>
                  <p className="text-gray-600">Get special training materials, updates, and invitations to events.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent p-2 rounded-full mr-4 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary">Amplify Your Impact</h4>
                  <p className="text-gray-600">
                    Together, we can reach more people and save more lives than any of us could alone.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 text-white">Join the Movement</Button>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=300"
                  alt="Training session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=300"
                  alt="Community event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=300" alt="Volunteers" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
