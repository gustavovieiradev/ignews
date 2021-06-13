import { fireEvent, render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { SubscribeButton } from '.';

jest.mock('next/router')
jest.mock('next-auth/client')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false])
    render(<SubscribeButton />)
    const text: any = 'Subscribe now'
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false])
    render(<SubscribeButton />)
    const text: any = 'Subscribe now'
    const subscribeButton = screen.getByText(text);
    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  })

  it('redirects user to posts in when user has a subscription', () => {
    const userRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([{
      user: {
        name: 'John Doe'
      },
      activeSubscription: true,
      expires: '1d'
    } as any, false])
    const pushMock = jest.fn();
    userRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)
    render(<SubscribeButton />)
    const text: any = 'Subscribe now'
    const subscribeButton = screen.getByText(text);
    fireEvent.click(subscribeButton);
    expect(pushMock).toHaveBeenCalled();
  })
})
