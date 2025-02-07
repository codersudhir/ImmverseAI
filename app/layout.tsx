import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

// Configure font with fallback and optimizations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: true
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: true,
});


export const metadata: Metadata = {
  title: 'ImmverseAI - Virtual Reality Experience',
  description: 'Explore the world of virtual reality with ImmverseAI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}