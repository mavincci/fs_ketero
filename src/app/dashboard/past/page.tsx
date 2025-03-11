import { EventCard } from '@/components/event-card';
import { randomUUID } from 'crypto';
import Image from 'next/image';

export default function Past() {
  return (
    <div className="space-x-4 space-y-4 grid grid-cols-3 gap-4">
      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="RSVP"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="Public"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="Invite-Only"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="RSVP"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="Public"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="RSVP"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="Public"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="Invite-Only"
        endTime="15:30"
        status="in-progress"
      />

      <EventCard
        id={randomUUID()}
        name="Team Meeting"
        startTime="14:30"
        type="Invite-Only"
        endTime="15:30"
        status="in-progress"
      />
    </div>
  );
}
