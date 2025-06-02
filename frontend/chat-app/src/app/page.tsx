'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const logOut = () => {
    deleteCookie('token');
    router.push('/login');
  };

  return <button onClick={logOut}>Log Out</button>;
}
