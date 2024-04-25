import { Textarea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/Button';
import { FormEvent, useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessages([...messages, message]);
  };

  return (
    <div className='flex h-screen flex-col bg-secondary p-5 justify-between'>
      <div>
        <ul>
          {messages.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=' mb-3'
          placeholder='Type your message here.'
          rows={5}
        />
        <div>
          <Button className='float-right' size='lg'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
