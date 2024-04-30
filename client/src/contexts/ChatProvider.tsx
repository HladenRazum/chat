import { ReactNode, createContext, useContext } from 'react'
import { SocketProvider } from './SocketProvider'

export const ChatContext = createContext(null)

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SocketProvider>
      <ChatContext.Provider value={null}>{children}</ChatContext.Provider>
    </SocketProvider>
  )
}

export const useChatContext = () => useContext(ChatContext)
