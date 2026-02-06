"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Message sent:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Have questions about Private Earth? Our team is here to help. Reach out anytime.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a href="mailto:hello@privateearthco.in" className="text-muted-foreground hover:text-primary transition">
                hello@privateearthco.in
              </a>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <Phone className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <a href="tel:+919000000000" className="text-muted-foreground hover:text-primary transition">
                +91 9000 000 000
              </a>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Office</h3>
              <p className="text-muted-foreground">Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Send Us a Message</h2>

        {submitted ? (
          <div className="bg-card border-2 border-primary rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
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

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
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
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What is this about?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        )}
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Quick Answers</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What is the response time?",
                a: "We typically respond to inquiries within 24-48 hours during business days.",
              },
              {
                q: "Can I schedule a visit?",
                a: "Yes! Please mention your preferred dates in the inquiry form or contact us directly.",
              },
              {
                q: "Do you have payment plans?",
                a: "We offer flexible investment structures. Contact our team to discuss options.",
              },
              {
                q: "Is there a minimum investment?",
                a: "Investment amounts depend on the project and share availability. Let's discuss your options.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
