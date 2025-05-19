import Hero from "@/components/hero"
import Mission from "@/components/mission"
import WhatWeTeach from "@/components/what-we-teach"
import Impact from "@/components/impact"
import Movement from "@/components/movement"
import GetInvolved from "@/components/get-involved"
import Founder from "@/components/founder"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import SaveALife from "@/components/save-a-life"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <WhatWeTeach />
      <Impact />
      <Movement />
      <GetInvolved />
      <Founder />
      <Blog />
      <Contact />
      <SaveALife />
    </main>
  )
}
