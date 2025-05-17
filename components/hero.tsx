import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 md:pt-0">
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10" />
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/classroom-training.png"
            alt="Children learning life-saving skills in a classroom"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-32 md:py-48 z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Empowering Communities Through Life-Saving Skills
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 font-medium">
            We teach essential skills that save lives. Join our movement to create safer, more resilient communities
            around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 border-2 border-white">
              <Link href="#get-involved">Get Involved</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#E6544F] text-white hover:bg-[#E6544F]/90 border-none">
              <Link href="#save-a-life">Save a Life in 60 Seconds</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
