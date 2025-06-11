import { useEffect, useState, createContext, useContext } from 'react';

const SocketContext = createContext<WebSocket | null>(null);

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ws] = useState(() => new WebSocket('ws://localhost:4000'));

  useEffect(() => {
    return () => {
      ws.close();
    };
  }, [ws]);

  return <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>;
}

export function useSocketProvider() {
  const ws = useContext(SocketContext);
  if (!ws) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return ws;
}
