"use client"

import Link from "next/link"
import type { Property } from "../lib/properties"

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/real-estate/${property.id}`}>
        <img src={property.image} alt={property.title} />
      </Link>

      <div style={{ marginTop: 8 }}>
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <div className="property-meta">
          <span>{property.location}</span>
          <span>·</span>
          <span>${property.price.toLocaleString()}</span>
        </div>
        <div style={{ marginTop: 8 }} className="text-sm text-muted-foreground">
          <span>{property.beds} bd</span> · <span>{property.baths} ba</span> · <span>{property.sqft} sqft</span>
        </div>
      </div>
    </article>
  )
}
