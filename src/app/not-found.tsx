'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="bg-primary flex min-h-screen items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-lg"
        >
          <p className="gradient-text text-7xl font-extrabold sm:text-8xl">404</p>
          <h1 className="text-primary mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
          <p className="text-secondary mt-3 text-base leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
            you back on track.
          </p>
          <Link
            href="/"
            className="cursor-hover mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
