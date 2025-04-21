import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential First Aid Skills Everyone Should Know",
      excerpt: "Learn the basic first aid techniques that could help you save a life in an emergency situation.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "How to Prepare Your Family for Natural Disasters",
      excerpt: "Create a comprehensive emergency plan to keep your loved ones safe during unexpected events.",
      date: "April 28, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "The Psychology of Emergency Response: Staying Calm Under Pressure",
      excerpt: "Discover techniques to manage stress and make clear decisions during crisis situations.",
      date: "April 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1E1E1E]">Blog & Updates</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Stay informed with our latest articles, success stories, and organizational updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="#" className="inline-flex items-center text-secondary font-medium hover:text-secondary/80">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-accent/50">
            <Link href="#">View All Posts</Link>
          </Button>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Subscribe to Our Newsletter</h3>
          <p className="text-center text-gray-600 mb-6">
            Get the latest updates, articles, and news delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
