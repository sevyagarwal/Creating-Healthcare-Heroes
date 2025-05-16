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
            <Image
              src="/images/sevya-agarwal.png"
              alt="Sevya Agarwal, Founder of One Breath Ahead"
              fill
              className="object-contain"
              priority
            />
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
                skills that are rarely taught in schools. With a goal to address this gap, she set out to design a first aid
                education program for students that is hands-on, empowering, and accessible, because saving a life
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
      </div>
    </section>
  )
}
