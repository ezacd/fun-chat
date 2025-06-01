import styles from './register.module.css';

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerBox}>
        <h2 className={styles.registerText}>Register</h2>
        <form className={styles.registerForm}>
          <label className={styles.registerFormLabel}>
            E-mail:
            <input className={styles.registerFromInput} type="email" />
          </label>

          <label className={styles.registerFormLabel}>
            Password:
            <input className={styles.registerFromInput} type="password" />
          </label>

          <label className={styles.registerFormLabel}>
            Confium password:
            <input className={styles.registerFromInput} type="password" />
          </label>

          <button className={styles.registerFormSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
