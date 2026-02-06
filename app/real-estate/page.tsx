import PropertyList from "../../components/property-list"
import { properties } from "../../lib/properties"

export const metadata = {
  title: "Real Estate Listings",
}

export default function RealEstatePage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Real Estate Listings</h1>
      <p className="text-muted-foreground mb-6">Browse a small selection of sample properties.</p>
      <PropertyList properties={properties} />
    </main>
  )
}
