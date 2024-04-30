import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { io } from 'socket.io-client'

type ContextProps = {
  isConnected: boolean
}

export const SocketContext = createContext<ContextProps>({ isConnected: false })

const SERVER_ENDPOINT = 'http://localhost:3000'
const socket = io(SERVER_ENDPOINT)

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true)
    }

    const onDisconnect = () => {
      setIsConnected(false)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  const props = {
    isConnected,
  }

  return (
    <SocketContext.Provider value={props}>{children}</SocketContext.Provider>
  )
}

export const useSocketContext = () => useContext(SocketContext)
