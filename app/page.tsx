"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Leaf, Users, Shield, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Main%20page%20background.png')",
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Own Nature.
            <br />
            Intelligently.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-delay">
            Own a share in premium farmland near Bangalore — a real asset offering appreciation, sandalwood yield, and private farmhouse living. Just arrive and enjoy.
          </p>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl mx-auto animate-fade-in-delay flex items-center justify-center gap-4">
            <span className="">Pre-Launch Indicative Prices per Share start at</span>
            <Link href="#featured-projects" aria-label="Jump to Featured Projects" className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm md:text-base shadow-md transform transition-all duration-200">₹19 Lakhs</Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="/interest"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Check Your Interest <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-primary text-white rounded-full font-semibold hover:bg-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Dream. Reality. A Better Way.
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-4">
            A second home—perfect until you own it.
          </p>
          <div className="mt-12 space-y-8 text-lg text-foreground">
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <p className="text-xl font-semibold mb-3">📍 Dream</p>
              <p>Your private sanctuary—your piece of paradise.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <p className="text-xl font-semibold mb-3">⚠️ Reality</p>
              <p>Used ~<span className="text-primary font-bold">50–60 days/year</span>. For the other ~<span className="text-primary font-bold">300 days</span>, you still pay full maintenance, taxes, and staffing.</p>
            </div>

          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Discover the Better Way <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Our Premium Estates</h2>
          <p className="text-xl text-muted-foreground">Choose from curated luxury farmland projects</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Mana */}
          <Link href="/projects/mana" className="group">
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1">
              <div className="h-64 bg-cover bg-center group-hover:opacity-90 transition-all duration-300 relative overflow-hidden" style={{ backgroundImage: "url('/mana-new.jpeg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Mana</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Entry-level luxury</p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold mb-4 text-sm">
                    <span className="font-bold">₹19 Lakh</span>
                    <span className="text-xs text-primary-foreground/80">per share</span>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">Approx 5,600 sq ft</div>
                      <div className="text-sm text-muted-foreground">Total area</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">5 shares</div>
                      <div className="text-sm text-muted-foreground">Available shares</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">~70 days</div>
                      <div className="text-sm text-muted-foreground">Days per year</div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          </Link>

          {/* Terra */}
          <Link href="/projects/terra" className="group">
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1">
              <div className="h-64 bg-cover bg-center group-hover:opacity-90 transition-all duration-300 relative overflow-hidden" style={{ backgroundImage: "url('/Terra.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Terra</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Intimate luxury at its finest</p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold mb-4 text-sm">
                    <span className="font-bold">₹29 Lakh</span>
                    <span className="text-xs text-primary-foreground/80">per share</span>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">Approx 10,000 sq ft</div>
                      <div className="text-sm text-muted-foreground">Total area</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">5 shares</div>
                      <div className="text-sm text-muted-foreground">Available shares</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">~70 days</div>
                      <div className="text-sm text-muted-foreground">Days per year</div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          </Link>

          {/* Vriksha */}
          <Link href="/projects/vriksha" className="group">
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1">
              <div className="h-64 bg-cover bg-center group-hover:opacity-90 transition-all duration-300 relative overflow-hidden" style={{ backgroundImage: "url('/Vriksha.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Vriksha</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Balanced luxury & value</p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold mb-4 text-sm">
                    <span className="font-bold">₹42 Lakh</span>
                    <span className="text-xs text-primary-foreground/80">per share</span>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">Approx 20,000 sq ft</div>
                      <div className="text-sm text-muted-foreground">Total area</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">5 shares</div>
                      <div className="text-sm text-muted-foreground">Available shares</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">~70 days</div>
                      <div className="text-sm text-muted-foreground">Days per year</div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          </Link>

          {/* Nirvana */}
          <Link href="/projects/nirvana" className="group">
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1">
              <div className="h-64 bg-cover bg-center group-hover:opacity-90 transition-all duration-300 relative overflow-hidden" style={{ backgroundImage: "url('/Nirvana.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Nirvana</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Ultimate luxury and land expanse</p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold mb-4 text-sm">
                    <span className="font-bold">₹72 Lakh</span>
                    <span className="text-xs text-primary-foreground/80">per share</span>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">Approx 40,000 sq ft</div>
                      <div className="text-sm text-muted-foreground">Total area</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">5 shares</div>
                      <div className="text-sm text-muted-foreground">Available shares</div>
                    </li>
                    <li className="text-foreground">
                      <div className="font-bold text-foreground">~70 days</div>
                      <div className="text-sm text-muted-foreground">Days per year</div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Private Earth */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Why Private Earth?</h2>
            <p className="text-xl text-muted-foreground">The smarter way to own luxury farmland</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Real Asset Ownership</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                Own your share through an SPV/LLP. Full equity participation, not a timeshare.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Tech-Enabled Access</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                Schedule and manage your stay via our mobile app. Seamless experience from booking to arrival.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Premium Community</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                Join like-minded high-net-worth individuals who value lifestyle, wellness, and privacy.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Leaf className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Sandalwood Investment</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                Benefit from the long-term value of premium sandalwood groves on your estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple 4-Step Process</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Dream", desc: "Explore our premium estates" },
            { step: 2, title: "Own", desc: "Secure your share" },
            { step: 3, title: "Experience", desc: "Enjoy your designated days" },
            { step: 4, title: "Manage", desc: "Our team handles the rest" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
