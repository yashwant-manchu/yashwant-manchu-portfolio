import type { Metadata } from 'next';
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { SITE_URL } from '@/lib/constants';

/**
 * Next.js font optimisation — fonts are downloaded at build time,
 * self-hosted, and exposed as CSS custom properties.
 * This is the correct approach in Next.js 13+ (App Router).
 * Do NOT also import them via @import url() in globals.css.
 */
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Yashwant Manchu — Frontend Engineer',
  description:
    'Frontend Software Engineer specialising in React.js, React Native, TypeScript, and Next.js. Building scalable web and mobile apps.',
  keywords:
    'Frontend Engineer, React.js, React Native, TypeScript, Next.js, Web Development, Mobile Development, Yashwant Manchu',
  authors: [{ name: 'Yashwant Manchu' }],
  creator: 'Yashwant Manchu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Yashwant Manchu',
    title: 'Yashwant Manchu — Frontend Engineer',
    description:
      'Frontend Software Engineer specialising in React.js, React Native, TypeScript, and Next.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashwant Manchu — Frontend Engineer',
    description:
      'Frontend Software Engineer specialising in React.js, React Native, TypeScript, and Next.js.',
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yashwant Manchu',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: 'Frontend Engineer',
  email: 'yashwanthmanchu059@gmail.com',
  sameAs: ['https://github.com/yashwant-manchu', 'https://linkedin.com/in/yashwant-manchu'],
  knowsAbout: ['React.js', 'React Native', 'TypeScript', 'Next.js'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
