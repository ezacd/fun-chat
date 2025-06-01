'use client';

import Link from 'next/link';
import styles from './register.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
  confPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm = (data: Inputs) => {
    console.log(data);
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
