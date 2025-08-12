import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/providers/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Yashwant Manchu - Frontend Developer',
  description: 'Frontend Developer specializing in React.js, React Native, and modern web technologies. Creating clean, modern, and fully responsive websites.',
  keywords: 'Frontend Developer, React.js, React Native, JavaScript, Web Development, Mobile Development, Yashwant Manchu',
  authors: [{ name: 'Yashwant Manchu' }],
  creator: 'Yashwant Manchu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yashwantmanchu.vercel.app',
    siteName: 'Yashwant Manchu Portfolio',
    title: 'Yashwant Manchu - Frontend Developer',
    description: 'Frontend Developer specializing in React.js, React Native, and modern web technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashwant Manchu - Frontend Developer',
    description: 'Frontend Developer specializing in React.js, React Native, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}