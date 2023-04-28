interface EventsProps {
  events: string[];
}

export function Events(props: EventsProps) {
  return (
    <ul>
      {props.events.map((event: string, index: number) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
}
