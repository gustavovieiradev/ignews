import { render, screen } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    )
    
    const textHome: any = 'home'
    expect(screen.getByText(textHome)).toBeInTheDocument();
  })
  
  it('adds active class if currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    )
    const textHome: any = 'home'
    expect(screen.getByText(textHome)).toHaveClass('active');
  })
})
