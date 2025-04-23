import { CheckCircle } from "lucide-react"

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Our Mission</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Somewhere, a child will take a breath because another child knew what to do. Together, we're building a world where first aid isn't forgotten, feared or reserved for adults, it's second nature. Every lesson we teach, every school we reach, is one more life that won't be lost to silence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Purpose</h3>
            <p className="text-gray-600">
              Empower young people with essential first aid and healthcare knowledge, equipping them with the confidence and skills to save lives in their communities. 
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">t</h3>
            <p className="text-gray-600">
              Building confidence and competence so that individuals feel ready to act in emergency situations.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Community</h3>
            <p className="text-gray-600">
              Creating networks of trained individuals who can support each other and respond collectively to
              emergencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
