import { createLazyFileRoute } from '@tanstack/react-router'
import { format } from 'date-fns'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Calendar, Clock, MapPin, PlusIcon, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { events } from '@/events'

export const Route = createLazyFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  // const [events, setEvents] = useState([])

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const { data } = await axios.get('/api/products')
  //     setEvents(data)
  //   }

  //   fetchEvents()
  // })

  return (
    <div className="page">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-xs-size font-[var(--font-weight-bold)]">
            Your Events
          </h3>
          <p className="text-sm text-[#808080]">
            Manage and track all your events
          </p>
        </div>
        <Button>
          <PlusIcon />
          Create Event
        </Button>
      </div>
      <Card>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <div className="grid gap-[10px] grid-cols-3">
                {events.map((event) => (
                  <Card key={event.event_id}>
                    <CardContent>
                      <h4 className="text-base">{event.title}</h4>
                      <p className="text-sm text-[#808080] mb-2">
                        {event.description}
                      </p>
                      <div className=" flex flex-col gap-y-2">
                        <p className="flex items-center gap-x-1 text-sm text-[#808080]">
                          <Calendar />
                          {format(event.date, 'EEEE, LLL d yyyy')}
                        </p>
                        <p className="flex items-center gap-x-1 text-sm text-[#808080]">
                          <Clock />
                          {format(event.date, 'HH:mm')}
                        </p>
                        <p className="flex items-center gap-x-1 text-sm text-[#808080]">
                          <MapPin />
                          {event.venue}
                        </p>
                      </div>
                    </CardContent>
                    <hr />
                    <CardFooter className=" flex justify-between items-center">
                      <p className="flex items-center gap-x-1 text-sm text-[#808080]">
                        <Users />
                        {event.attendees}
                      </p>
                      <Button>View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="grid gap-[10px] grid-cols-3">
                <Card>
                  <CardContent>Past</CardContent>
                </Card>
                <Card>
                  <CardContent>Events</CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="drafts">
              <div className="grid gap-[10px] grid-cols-3">
                <Card>
                  <CardContent>Drafts</CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
