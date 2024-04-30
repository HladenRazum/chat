import { useState } from 'react';
import { Separator } from '@/components/ui/Separator';
import ContactDetails from './ContactDetails';
import ContactsList from './ContactsList';
import ChatSection from './ChatSection';
import { ChatProvider } from '@/contexts/ChatProvider';
import OnlineIndicator from './OnlineIndicator';

export default function ChatApp() {
  const [messages, setMessages] = useState<string[]>([]);
  const [ownSocketId, setOwnSocketId] = useState<string | undefined>(undefined);

  const handleSendMessage = (message: string) => {};

  return (
    <ChatProvider>
      <div className="flex h-screen">
        <div className="w-[300px] p-5">
          <div className="flex flex-col justify-between h-full">
            <ContactsList contacts={[]} />
            <OnlineIndicator isOnline={true} />
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="w-full">
          <ChatSection onSendMessage={handleSendMessage} messages={messages} />
        </div>
        <Separator orientation="vertical" />
        <div className="p-5 w-[300px]">
          <ContactDetails />
        </div>
      </div>
    </ChatProvider>
  );
}
