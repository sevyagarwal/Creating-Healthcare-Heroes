import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Heart, Frown } from "lucide-react"

export default function TheProblemPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">The Problem</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Understanding the critical gaps in healthcare education and emergency response that we're working to
            address.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Emergency situation with delayed response"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Clock className="mr-2 h-6 w-6 text-secondary" />
              Critical Minutes Lost
            </h2>
            <p className="text-gray-700 mb-4">
              In emergency situations, the average response time for professional medical help is 8-14 minutes in urban
              areas and significantly longer in rural communities. Yet brain damage can begin within 4-6 minutes of
              oxygen deprivation, and severe bleeding can be fatal within minutes.
            </p>
            <p className="text-gray-700">
              This gap between incident and professional response represents a critical window where immediate action
              from bystanders can mean the difference between life and death.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-secondary" />
              Lack of Preparedness
            </h2>
            <p className="text-gray-700 mb-4">
              Less than 18% of the general public is trained in CPR, and even fewer know how to respond to other common
              emergencies like choking, severe bleeding, or allergic reactions. This knowledge gap is especially
              pronounced among children and teenagers.
            </p>
            <p className="text-gray-700">
              Despite being present at many emergencies, young people are rarely equipped with the knowledge to help,
              creating missed opportunities for immediate intervention.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Unprepared bystanders during emergency"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Healthcare disparities in different communities"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Frown className="mr-2 h-6 w-6 text-secondary" />
              Healthcare Disparities
            </h2>
            <p className="text-gray-700 mb-4">
              Access to healthcare education and emergency services varies dramatically based on socioeconomic status,
              geographic location, and other demographic factors. Communities with the least access to professional
              medical care are often those with the least training in emergency response.
            </p>
            <p className="text-gray-700">
              This creates a dangerous cycle where the most vulnerable populations are also the least prepared to handle
              medical emergencies.
            </p>
          </div>
        </div>

        <div className="bg-accent/30 p-8 rounded-lg max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary flex items-center justify-center">
            <Heart className="mr-2 h-6 w-6 text-secondary" />
            The Solution: Empowering the Next Generation
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            One Breath Ahead is addressing these critical gaps by bringing life-saving education directly to young
            people in schools and community centers. By teaching children and teenagers essential emergency response
            skills, we're creating a generation of prepared responders who can act during those critical minutes before
            professional help arrives.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="#what-we-teach">Learn About Our Approach</Link>
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">The Impact of Our Work</h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">59%</div>
              <p className="text-gray-700 text-sm">
                of trauma-related deaths could be prevented with basic first aid skills
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">2-3x</div>
              <p className="text-gray-700 text-sm">increase in survival rates when CPR is performed immediately</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">90%</div>
              <p className="text-gray-700 text-sm">
                of emergencies happen in homes where children could be first responders
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
