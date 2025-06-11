import { deleteCookie } from 'cookies-next';
import LogOut from '../assets/icons/logout.svg';
import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css';
import useSocket from '@/hooks/useSocket';

export default function Header() {
  const router = useRouter();
  const { isOpen } = useSocket();

  const logOut = () => {
    deleteCookie('token');
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.appUserName}>User</div>
      <h1 className={styles.headerH1}>Fun Chat</h1>
      <h2>{String(isOpen)}</h2>
      <button className={styles.appLogOutButton} onClick={logOut} type="button">
        <LogOut className={styles.logOut} />
      </button>
    </header>
  );
}
