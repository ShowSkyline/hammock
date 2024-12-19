import Link from 'next/link'
    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import { Search } from 'lucide-react'

    const events = [
      { id: 1, name: 'Tech Expo 2024', date: 'Jan 15-17, 2024', location: 'San Francisco, CA' },
      { id: 2, name: 'Global AI Summit', date: 'Feb 22-24, 2024', location: 'London, UK' },
      { id: 3, name: 'Eco-Friendly Products Showcase', date: 'Mar 10-12, 2024', location: 'Berlin, Germany' },
      { id: 4, name: 'Medical Innovations Conference', date: 'Apr 5-7, 2024', location: 'Tokyo, Japan' },
      { id: 5, name: 'Automotive Future Tech', date: 'May 18-20, 2024', location: 'Detroit, MI' },
      { id: 6, name: 'Renewable Energy Expo', date: 'Jun 8-10, 2024', location: 'Dubai, UAE' },
    ]

    export default function EventsPage() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Upcoming Trade Shows & Events</h1>

          <div className="mb-8">
            <div className="relative">
              <Input placeholder="Search events" className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id}>
                <img src={`/placeholder.svg?height=200&width=400&text=${event.name}`} alt={event.name} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>{event.date} | {event.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/events/${event.id}`}>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    }
