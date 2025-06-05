import { deleteCookie } from 'cookies-next';
import LogOut from '../assets/icons/logout.svg';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();

  const logOut = () => {
    deleteCookie('token');
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.appUserName}>User</div>
      <h1 className={styles.headerH1}>Fun Chat</h1>
      <button className={styles.appLogOutButton} onClick={logOut}>
        <LogOut className={styles.logOut} />
      </button>
    </header>
  );
}
