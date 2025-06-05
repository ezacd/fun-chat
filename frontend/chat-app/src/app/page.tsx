'use client';

import Aside from '@/components/app/Aside';
import styles from '../styles/page.module.css';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';

export default function MainPage() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainSection}>
        <Aside />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

function Chat() {
  return <section className={styles.chatSection}></section>;
}
