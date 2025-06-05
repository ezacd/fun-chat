'use client';

import Aside from '@/components/Aside';
import styles from './page.module.css';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <Aside />
    </div>
  );
}
