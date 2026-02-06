import Link from "next/link"
import { getPropertyById } from "../../../lib/properties"

type Props = { params: { id: string } }

export default function PropertyPage({ params }: Props) {
  const property = getPropertyById(params.id)

  if (!property) {
    return (
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <p className="mt-4">The property you're looking for doesn't exist.</p>
        <Link href="/real-estate" className="mt-6 inline-block text-sm text-primary">
          ← Back to listings
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/real-estate" className="text-sm text-primary">
        ← Back to listings
      </Link>

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-muted-foreground mt-2">{property.location} · ${property.price.toLocaleString()}</p>

      <div style={{ marginTop: 16 }}>
        <img src={property.image} alt={property.title} style={{ width: "100%", borderRadius: 8 }} />
      </div>

      <div style={{ marginTop: 12 }}>
        <h2 className="text-xl font-semibold">Details</h2>
        <ul className="mt-2 text-sm text-muted-foreground">
          <li>{property.beds} bedrooms</li>
          <li>{property.baths} bathrooms</li>
          <li>{property.sqft} sqft</li>
        </ul>

        <p className="mt-4">{property.description}</p>
      </div>

    </main>
  )
}
