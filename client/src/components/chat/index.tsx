import { useState } from 'react'
import { Separator } from '@/components/ui/Separator'
import ContactDetails from './ContactDetails'
import ContactsList from './ContactsList'
import ChatSection from './ChatSection'
import { ChatProvider } from '@/contexts/ChatProvider'

export default function ChatApp() {
  const [messages, setMessages] = useState<string[]>([])
  const [ownSocketId, setOwnSocketId] = useState<string | undefined>(undefined)

  const handleSendMessage = (message: string) => {}

  return (
    <ChatProvider>
      <div className='flex h-screen'>
        <div className='w-[300px] p-5'>
          <div className='flex flex-col justify-between h-full'>
            <ContactsList contacts={[]} />
            <div>
              {ownSocketId ? (
                <>
                  <div className=' bg-green-200 rounded-full py-1 px-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                    <p className='text-green-600 text-xs'>{ownSocketId}</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <Separator orientation='vertical' />
        <div className='w-full'>
          <ChatSection onSendMessage={handleSendMessage} messages={messages} />
        </div>
        <Separator orientation='vertical' />
        <div className='p-5 w-[300px]'>
          <ContactDetails />
        </div>
      </div>
    </ChatProvider>
  )
}
