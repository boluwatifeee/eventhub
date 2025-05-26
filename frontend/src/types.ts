export enum EventStatus {
  UPCOMING = 'upcoming',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ON_HOLD = 'on_hold',
}

export interface IEvent {
  event_id: string
  status: EventStatus
  date: string
  title: string
  description: string
  attendees: string
  venue: string
}
