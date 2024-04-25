import { Separator } from '@/components/ui/Separator';
import Chat from '@/components/chat/Chat';
import ContactsList from '@/components/chat/ContactsList';
import ContactDetails from './components/chat/ContactDetails';

function App() {
  return (
    <div className='container'>
      <div className='flex h-screen'>
        <div className='w-[300px] p-5'>
          <ContactsList />
        </div>
        <Separator orientation='vertical' />
        <div className='w-full'>
          <Chat />
        </div>
        <Separator orientation='vertical' />
        <div className='p-5 w-[300px]'>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
