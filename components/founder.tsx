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
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Founder portrait" fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-primary">Dr. Maya Johnson</h3>
            <p className="text-secondary font-medium mb-6">Founder & Executive Director</p>

            <div className="space-y-4 text-gray-700">
              <p>
                Dr. Maya Johnson founded our organization in 2015 after witnessing a tragedy that could have been
                prevented with basic life-saving knowledge. As an emergency physician, she saw firsthand how critical
                the first few minutes are in emergency situations.
              </p>
              <p>
                "I started this organization because I believe that everyone should have the knowledge and confidence to
                act in an emergency. Too often, I've seen cases where immediate action from a bystander could have made
                all the difference."
              </p>
              <p>
                With over 15 years of experience in emergency medicine and public health, Dr. Johnson has dedicated her
                career to saving lives both in the hospital and through community education. She has received numerous
                awards for her work in public health education and community service.
              </p>
              <p>
                Under her leadership, our organization has trained over 50,000 people in life-saving skills and expanded
                to programs in 25 countries.
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
