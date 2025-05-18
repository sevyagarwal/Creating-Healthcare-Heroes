import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, School, Calendar, Users, BookOpen } from "lucide-react"

export default function SchoolProgramPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">Bring This To Your School</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Empower your students with life-saving skills through our comprehensive school programs. Together, we can
            create a generation of confident first responders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Students learning first aid in a classroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our School Programs</h2>
            <p className="text-gray-700 mb-4">
              One Breath Ahead offers age-appropriate, engaging programs that teach essential life-saving skills to
              students of all ages. Our curriculum is designed by medical professionals and education experts to ensure
              that students not only learn critical skills but retain and can apply them when needed.
            </p>
            <p className="text-gray-700">
              From basic hygiene practices to CPR and first aid, our programs are tailored to fit into your school's
              schedule and complement existing health and physical education curricula.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Program Options</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <School className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">One-Day Workshop</h3>
              <p className="text-gray-600 mb-4">
                A concentrated 3-4 hour session covering essential life-saving skills, perfect for a health day or
                special event.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hands-on training with certified instructors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>All materials and equipment provided</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Take-home resources for students</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/school-program/one-day">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-primary relative">
              <div className="absolute -top-3 right-4 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                Most Popular
              </div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Six-Week Program</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive program with weekly 45-minute sessions, allowing for deeper learning and skill
                development.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Progressive skill building</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Student certification upon completion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Parent involvement components</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/school-program/six-week">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Teacher Training</h3>
              <p className="text-gray-600 mb-4">
                Equip your staff with the knowledge and resources to incorporate life-saving skills into their regular
                curriculum.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Professional development for educators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Curriculum integration guides</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ongoing support and resources</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/school-program/teacher-training">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-secondary/10 p-8 rounded-lg max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-full">
              <svg
                className="h-12 w-12 text-secondary"
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
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Your Support Makes a Difference</h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-secondary">100% of proceeds</strong> from our school programs are used to create
                first aid and emergency response kits for underserved communities and to fund our nonprofit's mission of
                bringing life-saving education to all.
              </p>
              <p className="text-gray-700">
                When you bring One Breath Ahead to your school, you're not just investing in your students'
                education—you're helping us reach children in communities with limited access to healthcare resources
                and emergency training.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Why Choose One Breath Ahead?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-accent p-2 rounded-full mr-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Evidence-Based Curriculum</h3>
                  <p className="text-gray-600">
                    Our programs are developed by medical professionals and educators, aligned with national health
                    education standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-accent p-2 rounded-full mr-4">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Experienced Instructors</h3>
                  <p className="text-gray-600">
                    All our instructors are certified in first aid and CPR, with extensive experience working with
                    children and teens.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-accent p-2 rounded-full mr-4">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Inclusive and Accessible</h3>
                  <p className="text-gray-600">
                    Our programs are designed to be accessible to students of all abilities, with adaptations available
                    as needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-accent p-2 rounded-full mr-4">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Comprehensive Materials</h3>
                  <p className="text-gray-600">
                    We provide all necessary equipment, student materials, and follow-up resources for continued
                    learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white p-8 rounded-lg max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Ready to bring life-saving education to your school?</h2>
              <p className="mb-6">
                Contact us today to discuss how we can customize our programs to meet your school's needs and schedule a
                consultation with our education team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="#contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/school-program/faq">View FAQs</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Students practicing CPR"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
