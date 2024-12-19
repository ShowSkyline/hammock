import Link from 'next/link'
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { Search, Calendar, MapPin } from 'lucide-react'

    export default function Home() {
      return (
        <div>
          <section className="hero-section relative h-screen flex items-center justify-center">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="absolute inset-0 z-0">
              <img
                src="/images/luxury-hotel.jpg"
                alt="Luxury Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Elevate Your Trade Show Experience</h1>
              <p className="text-xl mb-12">Discover AI-powered luxury accommodations for elite events worldwide.</p>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-3xl mx-auto">
                <form className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Input placeholder="Search events" className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/70" />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <Input placeholder="Select dates" className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/70" />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <Input placeholder="Location" className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/70" />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                    </div>
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-black">Search</Button>
                </form>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-white">Why Choose 4rooms.ai?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-primary">AI-Powered Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">Our advanced AI algorithm suggests the perfect accommodations based on your preferences and event requirements.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-primary">Exclusive Luxury Deals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">Access special rates and packages at the most prestigious hotels, tailored for discerning trade show attendees.</CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-primary">Concierge-Level Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">Enjoy personalized assistance and 24/7 support to ensure a seamless and luxurious stay during your event.</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-950">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-white">Featured Luxury Trade Shows</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-gray-800 border-gray-700 overflow-hidden">
                    <img src={`/images/tradeshow-${i}.jpg`} alt={`Luxury Trade Show ${i}`} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle className="text-white">Luxury Trade Show {i}</CardTitle>
                      <CardDescription className="text-gray-400">Date: Oct 1{i}, 2024 | Location: Paris, France</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/events/${i}`}>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black">View Details</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href="/events">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-black">Explore All Events</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      )
    }
