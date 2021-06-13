import { render } from '@testing-library/react';
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
    const component = render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    )
    
    const textHome: any = 'home'
    const el = component.getByText(textHome);

    expect(el).toBeInTheDocument();
  })
  
  it('adds active class if currently active', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    )
    const textHome: any = 'home'
    expect(getByText(textHome)).toHaveClass('active');
  })
})
