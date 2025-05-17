import Image from "next/image"

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Meet the Founder</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Learn about the person behind our mission and what inspired the creation of our organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/sevya-agarwal.png"
                alt="Sevya Agarwal, Founder of One Breath Ahead"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-primary">Sevya Agarwal</h3>
            <p className="text-secondary font-medium mb-6">Founder & Executive Director</p>

            <div className="space-y-4 text-gray-700">
              <p>
                Sevya Agarwal is an incoming freshman at The University of Texas at Austin, studying Psychology on the
                Pre-Med track, with a vision of becoming a future physician, public health leader, and healthcare
                innovator. She started One Breath Ahead as her Girl Scout Gold Award project, after being struck by a
                powerful truth: that up to 59% of trauma-related deaths could have been prevented with basic first aid
                skills that are rarely taught in schools. With a goal to address this gap, she set out to design a first
                aid education program for students that is hands-on, empowering, and accessible, because saving a life
                shouldn't depend on age, background, or zip code.
              </p>
              <p>
                What began as a small initiative in one school has now reached over 20,000 students across the U.S. and
                India, training the next generation in hygiene, first aid, emergency response, and disaster
                preparedness. Sevya's mission is to move healthcare from something we passively receive to something we
                actively do, starting with children. Through One Breath Ahead, she's proving that young people can be
                first responders too, and that sometimes, all it takes is one breath, one moment, one young hero to
                change the course of a life.
              </p>
            </div>

            <div className="mt-6 flex">
              <a
                href="https://www.linkedin.com/in/sevya-agarwal-9097912b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Connect with Sevya on LinkedIn"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Board of Directors Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Board of Directors</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Jennifer Lee"
                    fill
                    sizes="(max-width: 768px) 100px, 160px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-1 text-primary">Dr. Jennifer Lee</h4>
              <p className="text-secondary font-medium mb-2">Board Chair</p>
              <p className="text-gray-600 text-sm mb-3">
                Emergency Medicine Physician with 15 years of experience in trauma care and medical education.
              </p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-primary hover:text-primary/80">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Michael Rodriguez"
                    fill
                    sizes="(max-width: 768px) 100px, 160px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-1 text-primary">Michael Rodriguez</h4>
              <p className="text-secondary font-medium mb-2">Treasurer</p>
              <p className="text-gray-600 text-sm mb-3">
                Former CFO with extensive experience in nonprofit financial management and strategic planning.
              </p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-primary hover:text-primary/80">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sarah Patel"
                    fill
                    sizes="(max-width: 768px) 100px, 160px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-1 text-primary">Sarah Patel</h4>
              <p className="text-secondary font-medium mb-2">Secretary</p>
              <p className="text-gray-600 text-sm mb-3">
                Education policy expert specializing in curriculum development and youth empowerment programs.
              </p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-primary hover:text-primary/80">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Registered Agent Section */}
        <div className="mt-20 max-w-3xl mx-auto bg-accent/20 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Registered Agent</h3>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-32 w-32 rounded-full overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Legal Counsel"
                  fill
                  sizes="128px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 text-primary">Robert Johnson, Esq.</h4>
              <p className="text-secondary font-medium mb-3">Johnson Legal Services, LLC</p>
              <p className="text-gray-700 mb-2">
                Robert Johnson serves as the registered agent for One Breath Ahead, handling legal compliance and
                documentation for the organization.
              </p>
              <div className="text-gray-600">
                <p>123 Legal Avenue, Suite 500</p>
                <p>Austin, TX 78701</p>
                <p>legal@onebreathahead.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
