import Link from 'next/link';
import styles from './login.module.css';

export default function Lofin() {
  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <h2 className={styles.loginText}>Login</h2>
        <form className={styles.loginForm}>
          <label className={styles.loginFormLabel}>
            E-mail:
            <input className={styles.loginFromInput} type="email" />
          </label>

          <label className={styles.loginFormLabel}>
            Password:
            <input className={styles.loginFromInput} type="password" />
          </label>

          <button className={styles.loginFormSubmit} type="submit">
            Submit
          </button>
        </form>
        <p className={styles.dontHaveAccountText}>
          Don't have an account?{' '}
          <Link href="/register" className={styles.dontHaveAccountTextLink}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
