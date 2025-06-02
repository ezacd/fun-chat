'use client';

import { deleteCookie } from 'cookies-next';

export default function Home() {
  const logOut = () => {
    deleteCookie('token');
  };

  return <button onClick={logOut}>Log Out</button>;
}
