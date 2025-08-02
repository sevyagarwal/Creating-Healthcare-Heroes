import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Founder() {
  const boardMembers = [
    {
      name: "Anubhuti Sharma",
      role: "Board Chair & Medical Director",
      bio: "Emergency medicine physician with 15+ years experience in pediatric emergency care. Passionate about preventive healthcare education.",
      image: "/images/sevya-agarwal.png",
    },
    {
      name: "Sarva Thulasingam",
      role: "Director of Operations",
      bio: "Former school administrator with expertise in curriculum development and educational program implementation across diverse communities.",
      image: "/images/sarva-thulasingam.png",
    },
    {
      name: "Umesh Tiwari",
      role: "Community Outreach Director",
      bio: "Public health advocate with extensive experience in community engagement and health education program coordination.",
      image: "/images/umesh-tiwari.png",
    },
  ]

  return (
    <section id="founder" className="py-16 bg-gradient-to-br from-[#E6F7FF] to-[#F0F9FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4B53] mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our dedicated board of directors brings together expertise in medicine, education, and community outreach to
            drive our mission forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0A4B53] mb-2">{member.name}</h3>
                <p className="text-[#E6544F] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0A4B53] mb-4">Our Vision for the Future</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Together, our leadership team is committed to creating a world where every child has the knowledge and
              confidence to respond effectively in emergency situations. We believe that by teaching essential
              life-saving skills at an early age, we can build stronger, more resilient communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through innovative curriculum development, strategic partnerships, and community engagement, we're working
              to make first aid education accessible to schools and families across the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
