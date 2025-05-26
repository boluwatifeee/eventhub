import { EventStatus } from './types'
import type { IEvent } from './types'

export const events: Array<IEvent> = [
  {
    event_id: 'event-001',
    status: EventStatus.UPCOMING,
    date: '2025-06-01T10:00:00Z',
    title: 'Annual Tech Conference',
    description:
      'A gathering of tech enthusiasts to discuss emerging technologies.',
    attendees: '200',
    venue: 'Tech Hub Convention Center',
  },
  {
    event_id: 'event-002',
    status: EventStatus.COMPLETED,
    date: '2024-12-15T14:00:00Z',
    title: 'End of Year Celebration',
    description: 'A celebration to wrap up the year with all team members.',
    attendees: '150',
    venue: 'Lakeside Banquet Hall',
  },
  {
    event_id: 'event-003',
    status: EventStatus.CANCELLED,
    date: '2025-03-10T09:00:00Z',
    title: 'Spring Hackathon',
    description: 'A 48-hour coding competition for software developers.',
    attendees: '300',
    venue: 'Innovation Lab, Building B',
  },
  {
    event_id: 'event-004',
    status: EventStatus.ON_HOLD,
    date: '2025-07-22T16:00:00Z',
    title: 'Product Launch Event',
    description:
      'An unveiling of our latest product line with demos and press.',
    attendees: '500',
    venue: 'Downtown Exhibition Center',
  },
]
