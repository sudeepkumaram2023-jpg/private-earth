import type { Property } from "../lib/properties"
import PropertyCard from "./property-card"

export default function PropertyList({ properties }: { properties: Property[] }) {
  return (
    <section className="property-grid">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </section>
  )
}
