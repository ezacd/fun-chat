import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Login from '../page';
import { signInWithEmailAndPassword } from 'firebase/auth';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');
  return {
    ...originalModule,
    getAuth: () => ({ currentUser: null }),
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: { getIdToken: () => Promise.resolve('mock-token') },
      }),
    ),
  };
});

describe('Login page', () => {
  test('renders form with inputs and button', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('button is disabled initially', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
  });

  test('sending data after login', async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /submit/i });

    const user = userEvent.setup();

    await user.clear(emailInput);
    await user.type(emailInput, 'test@gmail.com');

    await user.clear(passwordInput);
    await user.type(passwordInput, 'A4385d11!qwe');

    await waitFor(() => expect(button).not.toBeDisabled());

    await user.click(button);

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(), // auth
        'test@gmail.com',
        'A4385d11!qwe',
      );
    });
  });
});
