import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SchoolProgramFAQPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link
          href="/school-program"
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to School Programs
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">Frequently Asked Questions</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our school programs, implementation, and impact.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 text-primary">
                How much does it cost to bring One Breath Ahead to our school?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Our program costs vary based on the size of your school, the program type selected, and the number of
                  students participating. We offer tiered pricing and scholarship options for schools with limited
                  budgets. We're committed to making our programs accessible to all schools, regardless of financial
                  constraints. Please contact us for a customized quote.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 text-primary">
                What age groups are your programs suitable for?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  We have curriculum designed for students from kindergarten through high school. Each program is
                  age-appropriate, with content and teaching methods tailored to different developmental stages. Our
                  elementary programs focus on basic hygiene and safety awareness, while middle and high school programs
                  include more advanced skills like CPR and first aid.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 text-primary">
                How do your programs fit into our existing curriculum?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Our programs are designed to complement existing health, physical education, and science curricula.
                  They can be implemented during regular class time, as part of health units, during physical education
                  periods, or as after-school activities. We work with your school's schedule and curriculum
                  requirements to ensure seamless integration.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 text-primary">
                Do you provide all necessary equipment and materials?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Yes, we provide all training equipment, student materials, and take-home resources. This includes
                  training mannequins, first aid supplies, educational handouts, and digital resources. Schools only
                  need to provide the space and ensure student participation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 text-primary">
                Are your instructors certified and background-checked?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Absolutely. All our instructors are certified in first aid and CPR, and many have additional medical
                  or educational qualifications. Every instructor undergoes comprehensive background checks and receives
                  specialized training in working with children and adolescents. We maintain strict safety protocols and
                  professional standards.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="px-6 text-primary">Can parents be involved in the program?</AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  We encourage parent involvement! Our programs include take-home materials that allow students to share
                  what they've learned with their families. For our longer programs, we offer optional parent workshops
                  and family learning sessions. This reinforces skills and extends the impact of our training beyond the
                  classroom.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="px-6 text-primary">
                How do you measure the effectiveness of your programs?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  We use pre and post-assessments to measure knowledge gain and skill acquisition. For longer programs,
                  we conduct follow-up assessments to evaluate retention. We also collect feedback from students,
                  teachers, and administrators. Our research team analyzes this data to continuously improve our
                  curriculum and teaching methods.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="px-6 text-primary">
                Do students receive certification after completing the program?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  Students who complete our six-week program or intensive workshops receive certificates of completion.
                  For high school students in our advanced programs, we offer pathways to recognized certifications in
                  CPR and first aid through our partnerships with certifying organizations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="px-6 text-primary">
                How are the proceeds from your school programs used?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="text-gray-700">
                  100% of proceeds from our school programs are reinvested into our nonprofit mission. This includes
                  creating first aid and emergency response kits for underserved communities, developing new educational
                  materials, training volunteer instructors, and expanding our reach to schools with limited resources.
                  When you bring One Breath Ahead to your school, you're helping us create a broader impact by making
                  life-saving education accessible to all communities, regardless of their financial resources.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Don't see your question answered here?</p>
            <Link
              href="#contact"
              className="text-primary font-medium hover:text-primary/80 underline underline-offset-4"
            >
              Contact us for more information
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
