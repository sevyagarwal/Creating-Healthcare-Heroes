"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

export default function SaveALife() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Check Responsiveness",
      content: "Tap the person's shoulder and shout 'Are you OK?' If there is no response, the person is unresponsive.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Call for Help",
      content:
        "Call emergency services (911 in the US) or ask someone else to call. If you're alone, call before starting CPR.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Check Breathing",
      content:
        "Look for chest movement, listen for breathing sounds, and feel for breath on your cheek for no more than 10 seconds.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Begin Chest Compressions",
      content:
        "Place hands in the center of the chest and push hard and fast at a rate of 100-120 compressions per minute.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Continue Until Help Arrives",
      content: "Continue CPR until emergency services arrive or the person shows signs of life like breathing.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps.find((step) => step.id === currentStep)

  return (
    <section id="save-a-life" className="py-20 bg-[#E6544F]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Save a Life in 60 Seconds</h2>
          <div className="w-20 h-1 bg-[#E6544F] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Learn the basic steps that could help you save someone's life in an emergency situation. These simple
            actions can make all the difference.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between mb-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative flex-1 ${step.id !== steps.length ? 'after:content-[""] after:absolute after:top-4 after:w-full after:h-0.5 after:border-b after:border-gray-300 after:border-dashed after:z-0' : ""}`}
              >
                <div
                  className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= step.id ? "bg-primary text-white" : "bg-gray-200 text-gray-500"} mx-auto`}
                  onClick={() => setCurrentStep(step.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to step ${step.id}`}
                >
                  {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : step.id}
                </div>
                <div className="mt-2 text-xs text-center hidden md:block">Step {step.id}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                {currentStepData && (
                  <Image
                    src={currentStepData.image || "/placeholder.svg"}
                    alt={currentStepData.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div>
                {currentStepData && (
                  <>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      Step {currentStepData.id}: {currentStepData.title}
                    </h3>
                    <p className="text-gray-700 mb-8">{currentStepData.content}</p>
                  </>
                )}

                <div className="flex justify-between">
                  <Button onClick={handlePrev} disabled={currentStep === 1} variant="outline">
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={currentStep === steps.length}
                    className="bg-[#E6544F] hover:bg-[#E6544F]/90 text-white"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Common Questions</h3>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 text-primary">
                  What if I'm afraid of doing CPR wrong?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  It's better to try CPR than to do nothing. Even if you haven't been trained, you can still perform
                  hands-only CPR by pushing hard and fast on the center of the chest. Emergency dispatchers can also
                  guide you through the process over the phone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 text-primary">Do I need to give rescue breaths?</AccordionTrigger>
                <AccordionContent className="px-6">
                  If you're not trained in CPR, it's recommended to perform hands-only CPR (chest compressions only). If
                  you are trained and confident, you can provide rescue breaths at a ratio of 30 compressions to 2
                  breaths.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6 text-primary">
                  Can I get in legal trouble for helping someone?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  Most places have "Good Samaritan" laws that protect people who provide reasonable assistance to those
                  in need. These laws are designed to encourage people to help without fear of legal repercussions if
                  something goes wrong.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 text-primary">
                  How do I know if I'm doing chest compressions correctly?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  For adults, push down at least 2 inches on the center of the chest at a rate of 100-120 compressions
                  per minute. A good tip is to compress to the beat of the song "Stayin' Alive" by the Bee Gees, which
                  has the right tempo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
