import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Droplets, AlertTriangle, Thermometer } from "lucide-react"

export default function WhatWeTeach() {
  return (
    <section id="what-we-teach" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">What We Teach</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Our curriculum covers essential life-saving skills that can make the difference between life and death in
            emergency situations.
          </p>
        </div>

        <Tabs defaultValue="cpr" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="cpr" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>CPR</span>
            </TabsTrigger>
            <TabsTrigger value="first-aid" className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              <span>First Aid</span>
            </TabsTrigger>
            <TabsTrigger value="emergency" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Emergency Response</span>
            </TabsTrigger>
            <TabsTrigger value="disaster" className="flex items-center gap-2">
              <Thermometer className="h-4 w-4" />
              <span>Disaster Prep</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cpr" className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Cardiopulmonary Resuscitation (CPR)</h3>
              <p className="text-gray-700 mb-4">
                Learn how to perform life-saving CPR for adults, children, and infants. Our hands-on training gives you
                the confidence to act quickly in cardiac emergencies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Recognizing cardiac arrest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Proper chest compression techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Rescue breathing methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Using automated external defibrillators (AEDs)</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="CPR training" fill className="object-cover" />
            </div>
          </TabsContent>

          <TabsContent value="first-aid" className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">First Aid Essentials</h3>
              <p className="text-gray-700 mb-4">
                Master the fundamentals of first aid to handle common injuries and medical emergencies with confidence
                and competence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Wound care and bleeding control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Fracture and sprain management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Choking response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Burn treatment</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="First aid training"
                fill
                className="object-cover"
              />
            </div>
          </TabsContent>

          <TabsContent value="emergency" className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Emergency Response</h3>
              <p className="text-gray-700 mb-4">
                Learn how to assess situations, make quick decisions, and coordinate with emergency services to maximize
                survival chances.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Scene safety assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Triage principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Effective communication with 911</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Psychological first aid</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Emergency response training"
                fill
                className="object-cover"
              />
            </div>
          </TabsContent>

          <TabsContent value="disaster" className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Disaster Preparedness</h3>
              <p className="text-gray-700 mb-4">
                Prepare yourself and your community for natural disasters and large-scale emergencies with practical
                planning and response strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Creating emergency plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Building emergency kits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Shelter-in-place procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Community coordination</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Disaster preparedness training"
                fill
                className="object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
