'use client'

    import { useState } from 'react'
    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
    import { Calendar } from "@/components/ui/calendar"
    import { format } from "date-fns"
    import { CalendarIcon } from 'lucide-react'
    import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

    export default function BookingPage({ params }: { params: { id: string } }) {
      const [date, setDate] = useState<Date>()

      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Book Your Room</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Deluxe King Room</CardTitle>
                  <CardDescription>Grand Hotel</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg?height=300&width=500&text=Room Image" alt="Room" className="w-full h-64 object-cover mb-4" />
                  <p className="text-lg mb-2">Price: $199/night</p>
                  <p className="mb-4">Spacious room with a king-size bed, perfect for business travelers.</p>
                  <h3 className="font-semibold mb-2">Amenities:</h3>
                  <ul className="list-disc list-inside">
                    <li>Free Wi-Fi</li>
                    <li>Flat-screen TV</li>
                    <li>Mini-bar</li>
                    <li>Work desk</li>
                    <li>En-suite bathroom</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="john@example.com" type="email" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>Check-in Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="nights">Number of Nights</Label>
                        <Input id="nights" placeholder="1" type="number" min="1" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>Room Type</Label>
                        <RadioGroup defaultValue="king">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="king" id="king" />
                            <Label htmlFor="king">King</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="twin" id="twin" />
                            <Label htmlFor="twin">Twin</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <Button type="submit">Confirm Booking</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    }
