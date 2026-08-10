import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from './ThemeProvider';

function Consumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('defaults to light when nothing is stored and the OS has no dark preference', async () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    await waitFor(() => expect(screen.getByTestId('theme')).toHaveTextContent('light'));
  });

  it('reads a previously saved theme from localStorage', async () => {
    window.localStorage.setItem('theme', 'dark');

    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    await waitFor(() => expect(screen.getByTestId('theme')).toHaveTextContent('dark'));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles the theme, persists it, and updates the <html> class', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    await waitFor(() => expect(screen.getByTestId('theme')).toHaveTextContent('light'));

    await user.click(screen.getByRole('button', { name: 'toggle' }));

    await waitFor(() => expect(screen.getByTestId('theme')).toHaveTextContent('dark'));
    expect(window.localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await user.click(screen.getByRole('button', { name: 'toggle' }));

    await waitFor(() => expect(screen.getByTestId('theme')).toHaveTextContent('light'));
    expect(window.localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('throws when useTheme is used outside a ThemeProvider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    function Bare() {
      useTheme();
      return null;
    }

    expect(() => render(<Bare />)).toThrow('useTheme must be used within a ThemeProvider');
    spy.mockRestore();
  });
});
