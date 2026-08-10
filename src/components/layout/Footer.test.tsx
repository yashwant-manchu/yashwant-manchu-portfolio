import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the credit line with the current year', () => {
    render(<Footer />);

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    expect(screen.getByText('Yashwant Manchu')).toBeInTheDocument();
  });

  it('renders working links to GitHub, LinkedIn and Email', () => {
    render(<Footer />);

    expect(screen.getByLabelText('GitHub')).toHaveAttribute(
      'href',
      'https://github.com/yashwant-manchu',
    );
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute(
      'href',
      'https://linkedin.com/in/yashwant-manchu',
    );
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'href',
      'mailto:yashwanthmanchu059@gmail.com',
    );
  });

  it('scrolls to the top when "Back to top" is clicked', async () => {
    window.scrollTo = jest.fn();
    const user = userEvent.setup();
    render(<Footer />);

    await user.click(screen.getByRole('button', { name: /back to top/i }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
