import { ReactNode, createContext, useContext } from 'react';
import { SocketProvider, useSocketContext } from './SocketProvider';

export const ChatContext = createContext({
  isConnected: false,
});

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { isConnected } = useSocketContext();

  return (
    <SocketProvider>
      <ChatContext.Provider value={{ isConnected }}>
        {children}
      </ChatContext.Provider>
    </SocketProvider>
  );
};

export const useChatContext = () => useContext(ChatContext);
