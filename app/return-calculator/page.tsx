import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import SandalwoodCalculator from "@/components/sandalwood-calculator"

export const metadata = {
  title: "Return Calculator | Private Earth",
  description: "Estimate sandalwood yield and land appreciation based on project assumptions.",
}

export default function ReturnCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Return Calculator</h1>
          <p className="text-muted-foreground">Estimate sandalwood returns and expected land appreciation for our projects.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <SandalwoodCalculator />
        </div>
      </section>

      <Footer />
    </div>
  )
}
