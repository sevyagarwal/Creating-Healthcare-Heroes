import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function MissionPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">Our Mission</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            One Breath Ahead is building a future where no life is lost because of a lack of knowledge. We equip the
            youth with life saving skills through engaging, age-appropriate education. By shifting healthcare from
            reaction to prevention, we empower the next generation to act in the moments that matter the most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Proactive Power</h3>
            <p className="text-gray-600">
              We don't wait for emergencies to teach kids what to do, we prepare them before they happen. Healthcare
              Heroes is about replacing panic with preparedness, and building a system where prevention isn't an
              afterthought, it's the foundation.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Youth as First Responders</h3>
            <p className="text-gray-600">
              We believe kids shouldn't be sheilded from responsibility, they should be equipped for it. Our programs
              turn students into first responders-in-training, empowering them with real skills, real confidence, and
              real responsibility for the lives around them.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Health Justice</h3>
            <p className="text-gray-600">
              First aid is the great equalizer. By bringing life-staving education into classrooms, not just clinics, we
              are closing gaps in access, ability, and awareness. Every child deserves the chance to save a life, no
              matter their background.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our vision for healthcare education"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a world where every young person has the knowledge, skills, and confidence to respond
                effectively in emergency situations. A world where preventable deaths are truly prevented, and where
                healthcare knowledge is accessible to all communities regardless of socioeconomic status.
              </p>
              <p className="text-gray-700">
                By embedding life-saving education into schools and community programs, we aim to create a generation of
                prepared responders who can bridge the critical gap between when an emergency occurs and when
                professional help arrives.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Empowerment:</span> We believe in the capacity of young people to
                    make a difference and save lives.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Accessibility:</span> Life-saving education should be available to
                    everyone, regardless of background or resources.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Prevention:</span> We prioritize proactive education over reactive
                    care.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Innovation:</span> We continuously improve our teaching methods to
                    engage young learners effectively.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Community:</span> We build networks of support that extend beyond
                    the classroom.
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our organizational values"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Join Our Mission</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Together, we can create a world where every child has the knowledge to save a life. Whether you're a
              parent, educator, healthcare professional, or community member, there are many ways to support our
              mission.
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="#get-involved">Get Involved Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
