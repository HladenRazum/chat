import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/Separator';
import ContactDetails from './ContactDetails';
import ContactsList from './ContactsList';
import ChatSection from './ChatSection';
import { socket } from './utils/socket';

export default function ChatApp() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState<string[]>([]);

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

  const handleSendMessage = (message: string) => {
    socket.timeout(5000).emit('chat_message', message);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[300px] p-5">
        <ContactsList />
      </div>
      <Separator orientation="vertical" />
      <div className="w-full">
        <ChatSection
          onSendMessage={handleSendMessage}
          isConnected={isConnected}
          messages={messages}
        />
      </div>
      <Separator orientation="vertical" />
      <div className="p-5 w-[300px]">
        <ContactDetails />
      </div>
    </div>
  );
}
