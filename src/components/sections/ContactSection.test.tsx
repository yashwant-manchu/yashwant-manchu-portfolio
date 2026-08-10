import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from './ContactSection';

async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), 'Jane Doe');
  await user.type(screen.getByLabelText('Email'), 'jane@example.com');
  await user.type(screen.getByLabelText('Message'), 'Hello there!');
  await user.click(screen.getByRole('button', { name: /send message/i }));
}

describe('ContactSection', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders required name, email, and message fields', () => {
    render(<ContactSection />);

    expect(screen.getByLabelText('Name')).toBeRequired();
    expect(screen.getByLabelText('Email')).toBeRequired();
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Message')).toBeRequired();
  });

  it('submits the form to /api/contact and shows a success state', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
    const user = userEvent.setup();
    render(<ContactSection />);

    await fillAndSubmit(user);

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Jane Doe',
          email: 'jane@example.com',
          message: 'Hello there!',
        }),
      }),
    );

    await waitFor(() => expect(screen.getByText('Sent!')).toBeInTheDocument());
    expect(screen.getByLabelText('Name')).toHaveValue('');
  });

  it('shows an error state when the API responds with failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });
    const user = userEvent.setup();
    render(<ContactSection />);

    await fillAndSubmit(user);

    await waitFor(() => expect(screen.getByText('Try again')).toBeInTheDocument());
  });

  it('shows an error state when the request throws', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('network down'));
    const user = userEvent.setup();
    render(<ContactSection />);

    await fillAndSubmit(user);

    await waitFor(() => expect(screen.getByText('Try again')).toBeInTheDocument());
  });
});
