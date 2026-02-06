import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Leaf } from "lucide-react"

export const metadata = {
  title: "Our Projects | Private Earth",
  description: "Explore our premium luxury farmland estates: Mana, Terra, Vriksha, and Nirvana.",
}

export default function Projects() {
  const projects = [
    {
      slug: "mana",
      name: "Mana",
      tagline: "Entry-level luxury",
      area: "Approx 5,600 sq ft",
      shares: "5",
      price: "₹19 Lakh / share",
      image: "/mana-new.jpeg",
      description: "An approachable entry-level estate with Approx 5,600 sq ft offering privacy and value.",
      features: [
        "Luxury Villa with Premium Amenities",
        "Sandalwood Grove with Yield Benefits",
        "Land Appreciation Potential",
        "Exclusive Nature Retreat",
        "Private Co-Owner Community",
      ],
      highlight: "Entry-level estate",
    },
    {
      slug: "terra",
      name: "Terra",
      tagline: "Intimate luxury at its finest",
      area: "Approx 10,000 sq ft",
      shares: "5",
      price: "₹29 Lakh / share",
      image: "/Terra.png",
      description: "An exclusive Approx 10,000 sq ft estate perfect for those seeking exclusivity.",
      features: [
        "Luxury Villa with Premium Amenities",
        "Sandalwood Grove with Yield Benefits",
        "Land Appreciation Potential",
        "Exclusive Nature Retreat",
        "Private Co-Owner Community",
      ],
      highlight: "Smallest, most exclusive estate",
    },
    {
      slug: "vriksha",
      name: "Vriksha",
      tagline: "Balanced luxury & value",
      area: "Approx 20,000 sq ft",
      shares: "5",
      price: "₹42 Lakh / share",
      image: "/Vriksha.png",
      description:
        "Our most popular offering, featuring Approx 20,000 sq ft of premium farmland with balanced luxury and accessibility.",
      features: [
        "Spacious Luxury Villa",
        "Sandalwood Investment with Yield Potential",
        "Land Value Appreciation",
        "Serene Nature Sanctuary",
        "Vibrant Co-Owner Community",
      ],
      highlight: "Most popular and balanced choice",
    },
    {
      slug: "nirvana",
      name: "Nirvana",
      tagline: "Ultimate luxury and land expanse",
      area: "Approx 40,000 sq ft",
      shares: "5",
      price: "₹72 Lakh / share",
      image: "/Nirvana.png",
      description: "The pinnacle of Private Earth offerings with Approx 40,000 sq ft of expansive luxury farmland.",
      features: [
        "Premium Estate Villa",
        "Premium Sandalwood Grove with Yield Benefits",
        "Maximum Land Appreciation Potential",
        "Ultimate Nature Experience",
        "Exclusive Community of 5",
      ],
      highlight: "Ultimate luxury and space",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Premium Estates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Choose from four carefully curated luxury farmland projects, each offering a unique lifestyle experience.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-300 ${i % 2 === 1 ? "md:order-2" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="h-80 rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl\">
                  <img src={project.image} alt={project.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500\" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4 text-sm hover:bg-primary/20 transition-colors\">
                  {project.highlight}
                </div>
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{project.name}</h2>
                <p className="text-xl text-muted-foreground mb-4">{project.tagline}</p>

                {/* Price pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold mb-6 text-sm">
                  <span className="font-bold">{project.price}</span>
                  <span className="text-xs text-primary-foreground/80">per share</span>
                </div>

                <p className="text-lg mb-6 text-foreground">{project.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="group/stat">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{project.area}</div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground transition-colors">Total Area</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{project.shares}</div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground transition-colors">Shares</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">~70</div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground transition-colors">Days/Year</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, j) => (
                      <li key={j} className="flex gap-2 items-start hover:translate-x-1 transition-transform duration-200">
                        <span className="text-primary mt-1 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/interest?project=${project.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Enquire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      <Footer />
    </div>
  )
}
