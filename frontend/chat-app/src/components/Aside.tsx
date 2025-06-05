import styles from './Aside.module.css';

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.asideUl}>
        <li className={styles.asideLi}>1</li>
        <li className={styles.asideLi}>2</li>
        <li className={styles.asideLi}>3</li>
      </ul>
    </aside>
  );
}
