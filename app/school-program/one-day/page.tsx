import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, Award, CheckCircle } from "lucide-react"

export default function OneDayWorkshopPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link
          href="/school-program"
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to School Programs
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">One-Day Workshop</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            A concentrated, high-impact workshop that equips students with essential life-saving skills in just one day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Students in a one-day workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-gray-700">3-4 hours</span>
              <span className="mx-2">•</span>
              <Users className="h-5 w-5 text-secondary" />
              <span className="text-gray-700">Up to 30 students per session</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              Our One-Day Workshop is designed to deliver maximum impact in a single session. Perfect for health fairs,
              special events, or as part of a broader health curriculum, this workshop introduces students to critical
              life-saving skills through hands-on activities and engaging demonstrations.
            </p>
            <p className="text-gray-700">
              Led by certified instructors, students will learn fundamental skills like recognizing emergencies, basic
              first aid, and how to respond in critical situations. The workshop is tailored to the age group and can be
              customized to focus on specific skills based on your school's needs.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-primary">What Students Will Learn</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Elementary School (K-5)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Basic hygiene and germ prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>How to recognize emergencies and get help</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Simple first aid for cuts, scrapes, and burns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fire safety and emergency preparedness</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Middle & High School (6-12)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hands-only CPR techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Responding to choking emergencies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bleeding control and wound care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Recognizing signs of stroke, heart attack, and other medical emergencies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Workshop Format</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Introduction & Awareness</h3>
              <p className="text-gray-600">
                Students learn to recognize emergency situations and understand the importance of quick action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Hands-On Skills</h3>
              <p className="text-gray-600">
                Interactive demonstrations and practice sessions with proper equipment and expert guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Scenario Practice</h3>
              <p className="text-gray-600">
                Students apply their new skills in realistic scenarios to build confidence and reinforce learning.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm max-w-5xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-secondary" />
            <h2 className="text-2xl font-semibold text-primary">What's Included</h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Certified instructors (1:15 instructor-to-student ratio)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>All necessary training equipment and supplies</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Student workbooks and take-home materials</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Certificates of participation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Digital resources for continued learning</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Pre and post-workshop assessments</span>
            </li>
          </ul>
        </div>

        <div className="bg-secondary/10 p-8 rounded-lg max-w-5xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-6">
            <svg
              className="h-8 w-8 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-primary">Making a Broader Impact</h2>
          </div>

          <p className="text-gray-700 mb-4">
            <strong className="text-secondary">100% of proceeds</strong> from our One-Day Workshop program are
            reinvested into our mission. Your participation directly funds:
          </p>

          <ul className="grid md:grid-cols-2 gap-4 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>First aid kits for underserved schools and communities</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Scholarship programs for schools with limited resources</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Training materials for volunteer instructors</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>Development of new educational resources</span>
            </li>
          </ul>

          <p className="text-gray-700">
            By bringing this program to your school, you're not only investing in your students' safety education but
            also helping us extend our reach to communities that need it most.
          </p>
        </div>

        <div className="bg-primary text-white p-8 rounded-lg max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to schedule a One-Day Workshop?</h2>
            <p className="max-w-2xl mx-auto">
              Our team will work with you to find the perfect date and customize the workshop content to meet your
              school's specific needs and goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="#contact">Request Information</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/school-program/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
