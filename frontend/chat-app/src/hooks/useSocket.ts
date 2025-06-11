import { useEffect, useState } from 'react';
import { useSocketProvider } from '@/contexts/SocketProvider';

export default function useSocket() {
  const ws = useSocketProvider();
  const [isOpen, setIsOpen] = useState(ws.readyState === WebSocket.OPEN);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleError = () => setIsOpen(false);

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('close', handleClose);
    ws.addEventListener('error', handleError);

    if (ws.readyState === WebSocket.OPEN) {
      setIsOpen(true);
    }

    return () => {
      ws.removeEventListener('open', handleOpen);
      ws.removeEventListener('close', handleClose);
      ws.removeEventListener('error', handleError);
    };
  }, [ws]);

  return { isOpen };
}
