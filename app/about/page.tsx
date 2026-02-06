import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "How It Works | Private Earth",
  description: "Learn about the Private Earth co-ownership model and how luxury farmland ownership works.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">How It Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Understand the Private Earth co-ownership model and why it's the smarter way to own luxury farmland.
        </p>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Second Homes Fall Short</h2>
          
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Numbers Don't Lie</h3>
              <p className="text-lg text-foreground mb-4">
                Second homes are used on average just <span className="font-bold">50-60 days per year</span> by families. For the other <span className="font-bold">300+ days</span>, your property sits vacant.
              </p>
              <p className="text-lg text-muted-foreground">
                Yet you bear 100% of the costs: property taxes, maintenance, utilities, gardening, security, pest control, insurance, and the constant worry about upkeep.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Managed Community Compromise</h3>
              <p className="text-lg text-foreground mb-4">
                Some turn to managed farm communities to share costs and responsibilities. Sounds good in theory.
              </p>
              <p className="text-lg text-muted-foreground">
                But here's the catch: You lose the very thing you were seeking—<span className="font-bold">privacy and exclusivity</span>. You're sharing your sanctuary with dozens of other families, compromising on the peaceful escape you envisioned.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">The Private Earth Solution</h3>
              <p className="text-lg text-foreground">
                What if you could enjoy a <span className="font-bold">luxury farmland estate</span> with:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg">Shared costs without shared crowds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg">True privacy in an intimate community of just 5 co-owners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg">Legal ownership and full equity participation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg">Professional management handling all maintenance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg">Long-term value through sandalwood grove investments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg">~70 days per year of guaranteed access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is Co-Ownership */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What is Co-Ownership?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Private Earth enables genuine, legal ownership of premium farmland through an SPV (Special Purpose
                Vehicle) or LLP (Limited Liability Partnership). This is not a timeshare model.
              </p>
              <ul className="space-y-4">
                {[
                  "Full equity participation in the property",
                  "Legal ownership documented in property records",
                  "Equal usage rights among all shareholders",
                  "Transparent management and maintenance",
                  "Right to transfer or sell your share",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-96 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/30 mb-4">SPV/LLP</div>
                <p className="text-muted-foreground">Legal ownership structure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Your Journey</h2>

        <div className="space-y-12">
          {[
            {
              step: "1. Buy Your Share",
              description: "Select your preferred estate (Mana, Terra, Vriksha, or Nirvana) and purchase a share.",
              details: ["Choose from available shares", "Complete due diligence", "Finalize ownership documentation"],
            },

            {
              step: "2. Get Equal Usage Days",
              description: "Enjoy approximately 70 days per year on your estate. Fully equal to all co-owners.",
              details: ["Schedule via mobile app", "Flexible booking windows", "Family and guests welcome"],
            },
            {
              step: "3. Experience Your Estate",
              description: "Access luxury villas, sandalwood groves, and all amenities during your designated time.",
              details: ["Premium accommodations", "Premium facilities", "Wellness programs available"],
            },
            {
              step: "4. Managed by Our Team",
              description: "We handle maintenance, management, and operations. You just enjoy the experience.",
              details: ["Professional property management", "Regular maintenance", "Community events"],
            },
          ].map((phase, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{phase.step}</h3>
                <p className="text-lg text-muted-foreground mb-4">{phase.description}</p>
                <ul className="grid md:grid-cols-3 gap-4">
                  {phase.details.map((detail, j) => (
                    <li key={j} className="flex gap-2 text-sm">
                      <span className="text-primary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Private Earth?</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  <th className="text-center py-4 px-4 font-bold">
                    <span className="text-primary">Private Earth</span>
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-muted-foreground">Timeshare</th>
                  <th className="text-center py-4 px-4 font-bold text-muted-foreground">Full Ownership</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Legal Ownership",
                    private: "✓ Full equity via SPV",
                    timeshare: "✗ Contract only",
                    full: "✓ Yes",
                  },
                  {
                    feature: "Usage Days",
                    private: "✓ ~70 days/year",
                    timeshare: "✓ ~70 days/year",
                    full: "✓ 365 days",
                  },
                  {
                    feature: "Resale Rights",
                    private: "✓ Transfer easily",
                    timeshare: "✗ Limited",
                    full: "✓ Full",
                  },
                  {
                    feature: "Management",
                    private: "✓ Professional",
                    timeshare: "✓ Company",
                    full: "✓ Your responsibility",
                  },
                  {
                    feature: "Investment Potential",
                    private: "✓ Asset appreciation",
                    timeshare: "✗ No",
                    full: "✓ Yes",
                  },
                  {
                    feature: "Shared Costs",
                    private: "✓ Equal distribution",
                    timeshare: "✓ Yes",
                    full: "✗ 100%",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/5 transition">
                    <td className="py-4 px-4 font-semibold">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-primary">{row.private}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.timeshare}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              q: "Who legally owns the land?",
              a: "You own your share through the SPV/LLP. Each co-owner holds equal equity, and ownership is documented in property records.",
            },
            {
              q: "How do I use my days?",
              a: "Schedule your stays via our mobile app. You get approximately 70 days per year, with flexible booking windows to suit your preferences.",
            },
            {
              q: "What if I want to sell my share?",
              a: "You can transfer or sell your share to other high-net-worth individuals. We can assist with the process to ensure continuity.",
            },
            {
              q: "Are there guaranteed returns?",
              a: "We don't promise fixed yields, but your share benefits from long-term land appreciation and the value of sandalwood groves.",
            },
            {
              q: "What if a co-owner wants to sell?",
              a: "Each co-owner can sell independently. We have a structured process to ensure smooth transitions while maintaining community harmony.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-lg font-bold mb-3 text-primary">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
