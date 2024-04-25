import { FormEvent, useRef, useState } from 'react';
import { Textarea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/Button';
import MessagesList from './MessagesList';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage('');
    textAreaRef.current?.focus();
  };

  return (
    <div className='flex h-screen flex-col p-5 justify-between gap-5'>
      <MessagesList messages={messages} />
      <form onSubmit={onSubmit}>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=' mb-3'
          placeholder='Type your message here.'
          rows={5}
          ref={textAreaRef}
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
