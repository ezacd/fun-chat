import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from '../page';
import { getAuth } from 'firebase/auth';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: null,
  }),
}));

describe('Login page', () => {
  test('test', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
