'use client';

import Link from 'next/link';
import styles from './login.module.css';
import { useForm } from 'react-hook-form';
import { auth } from '@/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm = (data: Inputs) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        router.push('/');
      })
      .catch((e) => {
        console.log('Login Error ', e.message);
        alert('Please try Again');
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <h2 className={styles.loginText}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit(submitForm)}>
          <label className={styles.loginFormLabel}>
            E-mail:
            <input
              className={styles.loginFromInput}
              type="email"
              {...register('email')}
            />
          </label>

          <label className={styles.loginFormLabel}>
            Password:
            <input
              className={styles.loginFromInput}
              type="password"
              {...register('password')}
            />
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
