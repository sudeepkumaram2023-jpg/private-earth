export type Property = {
  id: string
  title: string
  price: number
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  description: string
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Cozy 2BR in Koramangala",
    price: 3500000,
    location: "Bengaluru, India",
    beds: 2,
    baths: 1,
    sqft: 900,
    image: "/images/bangalore.svg",
    description: "A bright, cozy 2 bedroom apartment in Koramangala, close to cafes and tech hubs."
  },
  {
    id: "2",
    title: "Modern Family Home",
    price: 7200000,
    location: "Mumbai, India",
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: "/images/mumbai.svg",
    description: "Spacious 4 bedroom family home located in a residential neighbourhood in Mumbai."
  },
  {
    id: "3",
    title: "Backwater Cottage",
    price: 4950000,
    location: "Kerala, India",
    beds: 3,
    baths: 2,
    sqft: 1300,
    image: "/images/kerala.svg",
    description: "Peaceful cottage overlooking the Kerala backwaters with lush greenery and serene views."
  }
]

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id)
}
