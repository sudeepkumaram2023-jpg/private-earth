"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function InterestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectInterest: "",
    timeline: "",
    expectations: "",
  })
  const searchParams = useSearchParams()

  useEffect(() => {
    const project = searchParams?.get("project")
    if (project) {
      setFormData((prev) => ({ ...prev, projectInterest: project }))
    }
  }, [searchParams])
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectInterest: "",

        timeline: "",
        expectations: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Express Your Interest</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Tell us about yourself and your interest in Private Earth. A specialist will contact you shortly.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="bg-card border-2 border-primary rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground">
              We've received your interest. Our specialist team will contact you shortly to discuss your options.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-semibold">
                City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select your city</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Interest Details */}
            <div className="space-y-2">
              <label htmlFor="projectInterest" className="block text-sm font-semibold">
                Project Interest
              </label>
              <select
                id="projectInterest"
                name="projectInterest"
                value={formData.projectInterest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Which project interests you?</option>
                <option value="mana">Mana (Approx 5,600 sq ft)</option>
                <option value="terra">Terra (Approx 10,000 sq ft)</option>
                <option value="vriksha">Vriksha (Approx 20,000 sq ft)</option>
                <option value="nirvana">Nirvana (Approx 40,000 sq ft)</option>
                <option value="all">All Projects</option>
              </select>
            </div>



            <div className="space-y-2">
              <label htmlFor="timeline" className="block text-sm font-semibold">
                Target Timeline to Invest
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select timeline</option>
                <option value="immediately">Immediately</option>
                <option value="1-3months">Within 1-3 months</option>
                <option value="3-6months">Within 3-6 months</option>
                <option value="6-12months">Within 6-12 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="expectations" className="block text-sm font-semibold">
                Ownership Expectations
              </label>
              <select
                id="expectations"
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Primary interest?</option>
                <option value="usage">Lifestyle & Usage</option>
                <option value="investment">Investment Potential</option>
                <option value="both">Both equally</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition"
            >
              Submit Interest
            </button>

            <p className="text-sm text-muted-foreground text-center">
              We respect your privacy. Your information will only be used to connect you with our specialist team.
            </p>
          </form>
        )}
      </section>

      <Footer />
    </div>
  )
}
