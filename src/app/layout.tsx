import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adityabhardwaj.dev'),
  title: {
    default: 'Aditya Bhardwaj — AI/ML Engineer & Software Developer',
    template: '%s | Aditya Bhardwaj',
  },
  description:
    'Aditya Bhardwaj is a 3rd year CSE student specializing in AI, Machine Learning, Deep Learning, and Computer Vision. Building intelligent systems that solve real-world problems.',
  keywords: [
    'Aditya Bhardwaj',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Software Engineer',
    'Next.js',
    'React',
    'Python',
    'PyTorch',
    'PSIT Kanpur',
  ],
  authors: [{ name: 'Aditya Bhardwaj' }],
  creator: 'Aditya Bhardwaj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adityabhardwaj.dev',
    title: 'Aditya Bhardwaj — AI/ML Engineer & Software Developer',
    description:
      'Building intelligent systems that solve real-world problems. AI/ML Engineer, Software Developer, CSE Student.',
    siteName: 'Aditya Bhardwaj Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aditya Bhardwaj Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Bhardwaj — AI/ML Engineer & Software Developer',
    description:
      'Building intelligent systems that solve real-world problems.',
    creator: '@adityabhardwaj',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="bg-dark text-white antialiased overflow-x-hidden">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <CommandPalette />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0f1e',
              color: '#e2e8f0',
              border: '1px solid rgba(14,165,233,0.3)',
              borderRadius: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
