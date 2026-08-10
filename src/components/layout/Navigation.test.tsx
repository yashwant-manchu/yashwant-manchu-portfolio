import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from './Navigation';
import { ThemeProvider } from '../providers/ThemeProvider';

function renderNav() {
  return render(
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>,
  );
}

describe('Navigation', () => {
  it('renders the logo and primary nav items', () => {
    renderNav();

    expect(screen.getByText('Yashwant Manchu')).toBeInTheDocument();
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('opens the mobile menu when the hamburger button is clicked', async () => {
    const user = userEvent.setup();
    renderNav();

    expect(screen.getAllByText('Skills')).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));

    expect(screen.getAllByText('Skills')).toHaveLength(2);
  });

  it('closes the mobile menu again on a second click', async () => {
    const user = userEvent.setup();
    renderNav();

    const toggle = screen.getByRole('button', { name: 'Toggle menu' });
    await user.click(toggle);
    expect(screen.getAllByText('Skills')).toHaveLength(2);

    await user.click(toggle);
    await waitFor(() => expect(screen.getAllByText('Skills')).toHaveLength(1));
  });

  it('closes the mobile menu when a nav item is clicked', async () => {
    const user = userEvent.setup();
    renderNav();

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));
    expect(screen.getAllByText('About')).toHaveLength(2);

    const [, mobileAbout] = screen.getAllByText('About');
    await user.click(mobileAbout);

    await waitFor(() => expect(screen.getAllByText('About')).toHaveLength(1));
  });

  it('toggles and persists the theme when the theme button is clicked', async () => {
    const user = userEvent.setup();
    renderNav();

    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));

    expect(window.localStorage.getItem('theme')).toBe('dark');
  });
});
