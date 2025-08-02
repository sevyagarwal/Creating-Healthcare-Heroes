import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Founder from "@/components/founder"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Globe, Award, BookOpen, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meet Our Leadership Team - One Breath Ahead",
  description:
    "Learn about the dedicated board of directors leading One Breath Ahead's mission to teach life-saving first aid skills to children.",
}

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="bg-gradient-to-br from-[#FFD6E8] to-[#E6F7FF] py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A4B53] mb-4">Meet Our Leadership Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Dedicated professionals committed to empowering children with life-saving skills
            </p>
          </div>
        </div>
        <Founder />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-[#E6544F] hover:text-[#E6544F]/80 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <div className="relative">
                  <Image
                    src="/images/sevya-agarwal.png"
                    alt="Sevya Agarwal, Founder"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#E6544F] text-white p-4 rounded-lg shadow-lg">
                    <Heart className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Sevya Agarwal</h1>
                <p className="text-xl text-[#E6544F] mb-6 font-semibold">Founder & Executive Director</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#E6544F] mb-1">50+</div>
                    <div className="text-sm text-gray-600">Schools Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#E6544F] mb-1">10K+</div>
                    <div className="text-sm text-gray-600">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#E6544F] mb-1">25+</div>
                    <div className="text-sm text-gray-600">Lives Saved</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-[#E6544F] mr-3" />
                    <span className="text-gray-700">2023 Youth Leadership Award</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-[#E6544F] mr-3" />
                    <span className="text-gray-700">Certified First Aid Instructor</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-[#E6544F] mr-3" />
                    <span className="text-gray-700">Public Health Advocate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-2xl font-bold mb-6 text-[#1E1E1E]">The Story Behind the Mission</h2>

              <div className="bg-[#E6544F]/10 p-6 rounded-lg mb-8">
                <p className="text-lg italic text-gray-800 mb-0">
                  "I was 16 when I watched a classmate collapse during lunch. Surrounded by dozens of students and
                  teachers, no one knew what to do. In that moment of helplessness, I realized we teach calculus and
                  chemistry, but somehow forget the most important skill of all—how to save a life."
                </p>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                That pivotal moment in high school changed everything for Sevya Agarwal. What started as a personal
                tragedy became the catalyst for a nationwide movement to make first aid education as fundamental as
                reading and writing in American schools.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Growing up in a family of healthcare workers, Sevya had always been surrounded by conversations about
                saving lives. Her mother, a nurse, and her father, a paramedic, instilled in her the belief that
                everyone should know basic life-saving skills. But it wasn't until that day in the cafeteria that she
                truly understood the gap between what we teach and what we need to know.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#1E1E1E]">From Tragedy to Action</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                After witnessing her classmate's medical emergency, Sevya spent months researching the statistics. What
                she found was staggering: thousands of preventable deaths occur each year simply because bystanders
                don't know how to respond. Meanwhile, countries like Norway and Denmark, where first aid education is
                mandatory, have significantly higher survival rates for out-of-hospital cardiac arrests.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "I couldn't understand why we weren't teaching these skills," Sevya recalls. "We require students to
                take PE, but we don't teach them how to save someone's life. It seemed like the most obvious gap in our
                education system."
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#1E1E1E]">Building the Movement</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a senior project became Sevya's life mission. She began by partnering with her local
                fire department to bring first aid training to her own school. The response was overwhelming—students
                were eager to learn, teachers were supportive, and parents were grateful.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Word spread quickly. Other schools began reaching out, asking how they could implement similar programs.
                Sevya realized she had tapped into something much bigger than a single school initiative—she had
                identified a critical need that existed everywhere.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, Sevya's organization has reached over 50 schools and trained more than 10,000 students. But the
                numbers that matter most to her are different: the 25+ lives that have been saved by students who
                learned these skills through her programs.
              </p>

              <h3 className="text-xl font-bold mb-4 text-[#1E1E1E]">The Vision Forward</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sevya's ultimate goal is ambitious but achievable: making first aid education mandatory in all 50
                states. She envisions a future where every high school graduate knows how to perform CPR, stop severe
                bleeding, and respond to common medical emergencies.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "We're not just teaching first aid," she explains. "We're teaching young people that they have the power
                to make a difference. We're showing them that in the most critical moments, they can be someone's hero."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1E1E1E]">Board of Directors</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Anubhuti Sharma</h4>
                    <p className="text-gray-600 text-sm mb-3">Healthcare Policy Expert</p>
                    <p className="text-gray-700 text-sm">
                      Former healthcare administrator with 15+ years experience in emergency medical services and public
                      health policy. Anubhuti brings deep expertise in healthcare systems and policy development to
                      guide our strategic initiatives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src="/images/sarva-thulasingam.png"
                        alt="Sarva Thulasingam"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Sarva Thulasingam</h4>
                    <p className="text-gray-600 text-sm mb-3">Education Technology Leader</p>
                    <p className="text-gray-700 text-sm">
                      EdTech entrepreneur and former teacher who specializes in scaling educational programs across
                      diverse communities. Sarva's experience in curriculum development and educational technology helps
                      us reach more students effectively.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src="/images/umesh-tiwari.png"
                        alt="Umesh Tiwari"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Umesh Tiwari</h4>
                    <p className="text-gray-600 text-sm mb-3">Emergency Medicine Physician</p>
                    <p className="text-gray-700 text-sm">
                      Board-certified emergency physician with expertise in pediatric emergency care and community
                      health initiatives. Dr. Tiwari ensures our training programs meet the highest medical standards
                      and best practices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#E6544F]/10 rounded-lg p-8">
                <Globe className="h-12 w-12 text-[#E6544F] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-[#1E1E1E]">Join Sevya's Mission</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  We're building a movement of educators, parents, and community leaders who believe every child
                  deserves to know how to save a life. Together, we can make first aid education universal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/volunteer">
                    <Button className="bg-[#E6544F] hover:bg-[#E6544F]/90 text-white">Become a Volunteer</Button>
                  </Link>
                  <Link href="/school-program">
                    <Button
                      variant="outline"
                      className="border-[#E6544F] text-[#E6544F] hover:bg-[#E6544F]/10 bg-transparent"
                    >
                      Bring Program to Your School
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
