import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function SitemapPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">Site Map</h1>
          <p className="text-lg text-gray-700 mb-12">
            Use this site map to navigate through all the pages and resources available on our website.
          </p>

          <div className="space-y-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary border-b border-gray-200 pb-2">Main Pages</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>
                  <Link href="/" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/the-problem" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>The Problem</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#what-we-teach" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>What We Teach</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#impact" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Impact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#get-involved" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Get Involved</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#save-a-life" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Save a Life in 60 Seconds</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary border-b border-gray-200 pb-2">About</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>
                  <Link href="/about/mission" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Our Mission</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about/movement" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>The Movement</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about/founder" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Meet the Team</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* School Programs */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary border-b border-gray-200 pb-2">
                School Programs
              </h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>
                  <Link href="/school-program" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>School Programs Overview</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/school-program/one-day"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>One-Day Workshop</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/school-program/six-week"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Six-Week Program</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/school-program/teacher-training"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Teacher Training</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/school-program/faq"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Frequently Asked Questions</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary border-b border-gray-200 pb-2">
                Blog & Resources
              </h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>
                  <Link href="/blog" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Blog & Updates</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/training-materials"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Training Materials</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/research"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Research</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/partnerships"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Partnerships</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/press-kit"
                    className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Press Kit</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary border-b border-gray-200 pb-2">Get Involved</h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>
                  <Link href="/volunteer" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Volunteer Application</span>
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Donate</span>
                  </Link>
                </li>
                <li>
                  <Link href="/partner" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Partnership Opportunities</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary border-b border-gray-200 pb-2">
                Legal & Policies
              </h2>
              <ul className="grid md:grid-cols-2 gap-2">
                <li>
                  <Link href="/privacy-policy" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Terms of Service</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Cookie Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="flex items-center py-2 px-4 hover:bg-accent/20 rounded-md">
                    <ChevronRight className="h-4 w-4 mr-2 text-secondary" />
                    <span>Site Map</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
