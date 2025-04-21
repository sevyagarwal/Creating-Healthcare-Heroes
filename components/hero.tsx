import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10" />
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="People helping others"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container relative mx-auto px-4 py-32 md:py-48 z-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Communities Through Life-Saving Skills
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            We teach essential skills that save lives. Join our movement to create safer, more resilient communities
            around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
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
