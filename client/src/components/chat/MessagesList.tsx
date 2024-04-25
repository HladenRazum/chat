import { useEffect, useRef } from 'react';

type MessagesListProps = {
  autoScroll?: boolean;
  messages: string[];
};

export default function MessagesList({
  autoScroll = false,
  messages,
}: MessagesListProps) {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoScroll) {
      lastMessageRef.current?.scrollIntoView();
    }
  }, [messages, lastMessageRef, autoScroll]);

  return (
    <div className='bg-secondary overflow-y-auto'>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <div ref={lastMessageRef}></div>
    </div>
  );
}
