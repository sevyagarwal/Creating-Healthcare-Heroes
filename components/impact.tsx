import { Users, GraduationCap, Globe, Heart } from "lucide-react"

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Impact</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg">
            Since our founding, we've made a significant difference in communities around the world. Here's the impact
            we've created together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-secondary/30 p-4 rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">20K+</h3>
            <p className="text-sm md:text-base">People Trained</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-secondary/30 p-4 rounded-full mb-4">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">70+</h3>
            <p className="text-sm md:text-base">Workshops Conducted</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-secondary/30 p-4 rounded-full mb-4">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">2+</h3>
            <p className="text-sm md:text-base">Continents Reached</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-secondary/30 p-4 rounded-full mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2">250+</h3>
            <p className="text-sm md:text-base">Lives Saved</p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Success Stories</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <blockquote className="text-lg italic mb-4">
                "After the bootcamp, I felt more confident in being there for other people in my community. I feel like I can meaningfully contribute now"
              </blockquote>
              <div className="font-semibold">— 5th Grade Student, Austin</div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <blockquote className="text-lg italic mb-4">
                "This bootcamp has inspired me to continue with my dreams of becoming a doctor. I want to save people and heal them."
              </blockquote>
              <div className="font-semibold">— Gunjan Sharma, Rajisthan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
