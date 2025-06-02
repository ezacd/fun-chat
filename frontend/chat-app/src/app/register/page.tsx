'use client';

import Link from 'next/link';
import styles from './register.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'next/navigation';
import { validationSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'cookies-next';

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
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const submitForm = async (data: Inputs) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      reset();

      const token = await userCredential.user.getIdToken();

      setCookie('token', token);

      router.push('/');
    } catch (e) {
      console.log('catch ', (e as Error).message);
      alert('Something went wrong, please try again');
    }
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
            <p className={styles.registrationFormError}>
              {errors.email ? errors.email?.message : ''}
            </p>
          </label>

          <label className={styles.registerFormLabel}>
            Password:
            <input
              className={styles.registerFromInput}
              type="password"
              {...register('password')}
            />
            <p className={styles.registrationFormError}>
              {errors.password ? errors.password?.message : ''}
            </p>
          </label>

          <label className={styles.registerFormLabel}>
            Confium password:
            <input
              className={styles.registerFromInput}
              type="password"
              {...register('confPassword')}
            />
            <p className={styles.registrationFormError}>
              {errors.confPassword ? errors.confPassword?.message : ''}
            </p>
          </label>

          <button
            className={styles.registerFormSubmit}
            type="submit"
            disabled={!isValid}
          >
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
