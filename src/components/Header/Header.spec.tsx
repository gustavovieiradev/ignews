import { render, screen } from '@testing-library/react';
import { Header } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <Header />
    )
    
    const textHome: any = 'Home'
    const textPost: any = 'Posts'

    expect(screen.getByText(textHome)).toBeInTheDocument();
    expect(screen.getByText(textPost)).toBeInTheDocument();
  });
})
