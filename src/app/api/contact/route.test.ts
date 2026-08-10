/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';

const verifyMock = jest.fn();
const sendMailMock = jest.fn();

jest.mock('nodemailer', () => ({
  __esModule: true,
  default: {
    createTransport: jest.fn(() => ({
      verify: verifyMock,
      sendMail: sendMailMock,
    })),
  },
}));

import { POST } from './route';

function makeRequest(body: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/contact', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    process.env = { ...originalEnv, EMAIL_USER: 'test@example.com', EMAIL_PASS: 'secret' };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('rejects a request missing required fields', async () => {
    const res = await POST(makeRequest({ name: '', email: '', message: '' }));

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'All fields are required' });
  });

  it('rejects an invalid email address', async () => {
    const res = await POST(makeRequest({ name: 'Jane', email: 'not-an-email', message: 'Hi' }));

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'Invalid email format' });
  });

  it('returns a server error when email credentials are missing', async () => {
    delete process.env.EMAIL_USER;
    delete process.env.EMAIL_PASS;

    const res = await POST(makeRequest({ name: 'Jane', email: 'jane@example.com', message: 'Hi' }));

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: 'Server configuration error' });
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it('sends the email and returns 200 on success', async () => {
    verifyMock.mockResolvedValue(true);
    sendMailMock.mockResolvedValue({ messageId: 'abc123' });

    const res = await POST(
      makeRequest({ name: 'Jane', email: 'jane@example.com', message: 'Hello there' }),
    );

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      message: 'Email sent successfully',
      messageId: 'abc123',
    });
    expect(sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'yashwanthmanchu059@gmail.com',
        subject: expect.stringContaining('Jane'),
        html: expect.stringContaining('Hello there'),
      }),
    );
  });

  it('returns a friendly error when nodemailer authentication fails', async () => {
    verifyMock.mockResolvedValue(true);
    sendMailMock.mockRejectedValue(new Error('Invalid login: 535 authentication failed'));

    const res = await POST(
      makeRequest({ name: 'Jane', email: 'jane@example.com', message: 'Hello' }),
    );

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({
      error: 'Email authentication failed. Please check credentials.',
    });
  });

  it('returns a generic error for any other send failure', async () => {
    verifyMock.mockResolvedValue(true);
    sendMailMock.mockRejectedValue(new Error('ECONNRESET'));

    const res = await POST(
      makeRequest({ name: 'Jane', email: 'jane@example.com', message: 'Hello' }),
    );

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: 'Failed to send email. Please try again.' });
  });
});
