import { FormEvent, useEffect, useRef, useState } from 'react';
import { Textarea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/Button';
import { socket } from './utils/socket';
import MessagesList from './MessagesList';

export default function Chat() {
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onMessagesEvent = (value: string) => {
      setMessages((prev) => [...prev, value]);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('chat_message', onMessagesEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('dsconnect', onDisconnect);
      socket.off('chat_message', onMessagesEvent);
    };
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    socket.timeout(5000).emit('chat_message', message, () => {
      setIsLoading(false);
    });

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
        {isConnected ? null : 'NOT CONNECTED'}
        <div>
          <Button disabled={isLoading} className='float-right' size='lg'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
