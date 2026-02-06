import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Users, Trees, Home } from "lucide-react"
import { notFound, redirect } from "next/navigation"

const projects = {
  mana: {
    name: "Mana",
    tagline: "Entry-level Luxury",
    area: "Approx 5,600 sq ft",
    totalShares: "5",
    daysPerYear: "~70",
    location: "Near Bangalore, India",
    price: "₹19 Lakh / share",
    image: "/mana-new.jpeg",
    description:
      "Mana is our entry-level estate. This Approx 5,600 sq ft offering provides privacy and value while maintaining Private Earth's standards of luxury.",

    highlights: [
      "Entry-level, approachable estate",
      "Balanced value and privacy",
      "Sandalwood yield benefits",
      "Intimate community of 5 co-owners",
      "Perfect for first-time buyers",
    ],
    features: [
      {
        icon: Home,
        title: "Luxury Villa",
        description: "Premium accommodation with thoughtful amenities",
      },
      {
        icon: Trees,
        title: "Sandalwood Benefits",
        description: "Sandalwood cultivation providing long-term value",
      },
      {
        icon: Users,
        title: "Intimate Community",
        description: "Small, private community of co-owners",
      },
      {
        icon: MapPin,
        title: "Land Value + Nature",
        description: "Enjoy nature while building equity",
      },
    ],
    specs: [
      { label: "Total Area", value: "Approx 5,600 sq ft" },
      { label: "Villa Area", value: "~2,000 sq ft" },
      { label: "Sandalwood Grove", value: "~3,000 sq ft" },
      { label: "Available Shares", value: "5" },
      { label: "Days Per Year", value: "~70" },
      { label: "Co-owners", value: "5 (including you)" },
    ],
  },
  terra: {
    name: "Terra",
    tagline: "Intimate Luxury at Its Finest",
    area: "Approx 10,000 sq ft",
    totalShares: "5",
    daysPerYear: "~70",
    location: "Near Bangalore, India",
    price: "₹29 Lakh / share",
    image: "Lush farmland with intimate villa setting",
    description:
      "Terra represents the pinnacle of exclusivity. This intimate Approx 10,000 sq ft estate is designed for discerning individuals who value privacy and personalized experiences.",
    highlights: [
      "Smallest and most exclusive estate",
      "Land appreciates as you enjoy it",
      "Sandalwood yield benefits over time",
      "Exclusive community of 5 co-owners",
      "Nature's serenity meets luxury living",
    ],
    features: [
      {
        icon: Home,
        title: "Luxury Villa",
        description: "Premium accommodation with world-class amenities and finishes",
      },
      {
        icon: Trees,
        title: "Sandalwood Yield Benefits",
        description: "Harness the long-term financial returns from premium sandalwood cultivation",
      },
      {
        icon: Users,
        title: "Exclusive Community",
        description: "Personal connection with 4 other distinguished co-owners",
      },
      {
        icon: MapPin,
        title: "Land Appreciation + Nature",
        description: "Build wealth while experiencing authentic nature's tranquility",
      },
    ],
    specs: [
      { label: "Total Area", value: "Approx 10,000 sq ft" },
      { label: "Villa Area", value: "~2,500 sq ft" },
      { label: "Sandalwood Grove", value: "~3,000 sq ft" },
      { label: "Available Shares", value: "5" },
      { label: "Days Per Year", value: "~70" },
      { label: "Co-owners", value: "5 (including you)" },
    ],
  },
  vriksha: {
    name: "Vriksha",
    tagline: "Balanced Luxury & Value",
    area: "Approx 20,000 sq ft",
    totalShares: "5",
    daysPerYear: "~70",
    location: "Near Bangalore, India",
    price: "₹42 Lakh / share",
    image: "Beautiful farmland with spacious villa complex",
    description:
      "Vriksha strikes the perfect balance between luxury and practicality. This Approx 20,000 sq ft estate offers more space and amenities while maintaining exclusivity and community spirit.",
    highlights: [
      "Most popular and balanced choice",
      "Watch your investment grow with land appreciation",
      "Earn from sandalwood yield benefits",
      "Balanced community of 5 co-owners",
      "Premium nature retreat with financial upside",
    ],
    features: [
      {
        icon: Home,
        title: "Spacious Villa",
        description: "Multiple-zone luxury accommodation with various activity areas",
      },
      {
        icon: Trees,
        title: "Sandalwood Wealth Creation",
        description: "Substantial sandalwood investment with strong yield appreciation",
      },
      {
        icon: Users,
        title: "Vibrant Community",
        description: "Balanced community size perfect for events and gatherings",
      },
      {
        icon: MapPin,
        title: "Land Value + Nature Escape",
        description: "Growing equity while immersed in peaceful, pristine nature",
      },
    ],
    specs: [
      { label: "Total Area", value: "Approx 20,000 sq ft" },
      { label: "Villa Area", value: "~5,000 sq ft" },
      { label: "Sandalwood Grove", value: "~6,000 sq ft" },
      { label: "Available Shares", value: "5" },
      { label: "Days Per Year", value: "~70" },
      { label: "Co-owners", value: "5 (including you)" },
    ],
  },
  nirvana: {
    name: "Nirvana",
    tagline: "Ultimate Luxury and Land Expanse",
    area: "Approx 40,000 sq ft",
    totalShares: "5",
    daysPerYear: "~70",
    location: "Near Bangalore, India",
    price: "₹72 Lakh / share",
    image: "Expansive luxury farmland estate",
    description:
      "Nirvana is the ultimate expression of Private Earth luxury. This expansive Approx 40,000 sq ft estate provides unparalleled space, amenities, and investment potential.",
    highlights: [
      "Ultimate luxury and maximum land expanse",
      "Superior land appreciation potential",
      "Maximum sandalwood yield benefits",
      "Exclusive 5-member premium community",
      "Nature's grandeur with wealth creation",
    ],
    features: [
      {
        icon: Home,
        title: "Premium Villa Estate",
        description: "Ultimate luxury accommodation with exclusive amenities",
      },
      {
        icon: Trees,
        title: "Maximum Sandalwood Returns",
        description: "Premium large-scale sandalwood grove with highest yield potential",
      },
      {
        icon: Users,
        title: "Exclusive Community",
        description: "Intimate group of 5 premium co-owners with shared vision",
      },
      {
        icon: MapPin,
        title: "Land Equity + Nature Paradise",
        description: "Maximum growth potential while living amidst pristine nature",
      },
    ],
    specs: [
      { label: "Total Area", value: "Approx 40,000 sq ft" },
      { label: "Villa Area", value: "~10,000 sq ft" },
      { label: "Sandalwood Grove", value: "~12,000 sq ft" },
      { label: "Available Shares", value: "5" },
      { label: "Days Per Year", value: "~70" },
      { label: "Co-owners", value: "5 (including you)" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects[resolvedParams.slug as keyof typeof projects]
  if (!project) return {}
  return {
    title: `${project.name} | Private Earth`,
    description: `Explore ${project.name}, a ${project.area} luxury farmland estate.`,
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects[resolvedParams.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  // Redirect to enquiry form with project pre-selected
  redirect(`/interest?project=${resolvedParams.slug}`)
} 
