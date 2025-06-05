'use client';

import Aside from '@/components/app/Aside';
import styles from './page.module.css';
import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <Aside />
      <Footer />
    </div>
  );
}
