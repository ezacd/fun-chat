'use client';

import Aside from '@/components/Aside';
import styles from '../styles/page.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';
import SocketProvider from '@/contexts/SocketProvider';

export default function MainPage() {
  return (
    <SocketProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.mainSection}>
          <Aside />
          <Chat />
        </main>
        <Footer />
      </div>
    </SocketProvider>
  );
}
