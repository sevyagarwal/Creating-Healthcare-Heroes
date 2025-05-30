import { CheckCircle } from "lucide-react"

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Our Mission</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            One Breath Ahead is building a future where no life is lost because of a lack of knowledge. We equip the youth with life saving skills through engaging, age-appropriate education. By shifting healthcare from reaction to prevention, we empower the next generation to act in the moments that matter the most. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Proactive Power</h3>
            <p className="text-gray-600">
              We don't wait for emergencies to teach kids what to do, we prepare them before they happen. Healthcare Heroes is about replacing panic with preparedness, and building a system where prevention isn't an afterthought, it's the foundation.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Youth as First Responders</h3>
            <p className="text-gray-600">
              We believe kids shouldn't be sheilded from responsibility, they should be equipped for it. Our programs turn students into first responders-in-training, empowering them with real skills, real confidence, and real responsibility for the lives around them.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg shadow-sm">
            <div className="bg-white p-3 rounded-full w-fit mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Health Justice</h3>
            <p className="text-gray-600">
              First aid is the great equalizer. By bringing life-staving education into classrooms, not just clinics, we are closing gaps in access, ability, and awareness. Every child deserves the chance to save a life, no matter their background.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
