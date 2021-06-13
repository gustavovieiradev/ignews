import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client';
import { SignInButton } from '.';

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />)
    const text: any = 'Sign in with Github'
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([{
      user: {
        name: 'John Doe'
      },
      expires: '1d'
    }, false])
    render(<SignInButton />)
    const text: any = 'John Doe'
    expect(screen.getByText(text)).toBeInTheDocument();
  });
})
