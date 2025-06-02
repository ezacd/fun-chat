'use client';

import Link from 'next/link';
import styles from './login.module.css';
import { useForm } from 'react-hook-form';
import { auth } from '@/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { setCookie } from 'cookies-next';

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const submitForm = async (data: Inputs) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      reset();

      const token = await userCredential.user.getIdToken();

      setCookie('token', token);

      router.push('/');
    } catch (e) {
      console.log('Login Error', (e as Error).message);
      alert('Please try again');
    }
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
            <p className={styles.registrationFormError}>
              {errors.email ? errors.email?.message : ''}
            </p>
          </label>

          <label className={styles.loginFormLabel}>
            Password:
            <input
              className={styles.loginFromInput}
              type="password"
              {...register('password')}
            />
            <p className={styles.registrationFormError}>
              {errors.password ? errors.password?.message : ''}
            </p>
          </label>

          <button
            className={styles.loginFormSubmit}
            type="submit"
            disabled={!isValid}
          >
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
