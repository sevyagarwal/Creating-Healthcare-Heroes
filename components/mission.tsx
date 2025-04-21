import { CheckCircle } from "lucide-react"

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We believe that everyone should have access to life-saving knowledge. Our mission is to empower individuals
            and communities with the skills and confidence to respond effectively in emergency situations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
            <p className="text-gray-600">
              Providing accessible, practical training in life-saving techniques to people of all ages and backgrounds.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Empowerment</h3>
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
