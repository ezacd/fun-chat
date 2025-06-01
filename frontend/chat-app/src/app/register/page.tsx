'use client';

import Link from 'next/link';
import styles from './register.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string;
  password: string;
  confPassword: string;
};

export default function Register() {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm = async (data: Inputs) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        reset();
        router.push('/');
      })
      .catch((e) => {
        console.log('catch ', e.message);
        alert('Something went wrong please try again');
      });
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerBox}>
        <h2 className={styles.registerText}>Register</h2>
        <form
          className={styles.registerForm}
          onSubmit={handleSubmit(submitForm)}
        >
          <label className={styles.registerFormLabel}>
            E-mail:
            <input
              className={styles.registerFromInput}
              type="email"
              {...register('email')}
            />
          </label>

          <label className={styles.registerFormLabel}>
            Password:
            <input
              className={styles.registerFromInput}
              type="password"
              {...register('password')}
            />
          </label>

          <label className={styles.registerFormLabel}>
            Confium password:
            <input
              className={styles.registerFromInput}
              type="password"
              {...register('confPassword')}
            />
          </label>

          <button className={styles.registerFormSubmit} type="submit">
            Submit
          </button>
        </form>
        <p className={styles.haveAccountText}>
          Already have an account?{' '}
          <Link href="/login" className={styles.haveAccountTextLink}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
