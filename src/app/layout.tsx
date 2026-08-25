import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aditya Bhardwaj — Systems Architect & Software Engineer',
  description:
    'Personal 3D portfolio of Aditya Bhardwaj. Computer Science & Engineering undergraduate building distributed humanitarian systems, real-time vehicle telemetry, and scalable full-stack architectures.',
  keywords: [
    'Aditya Bhardwaj',
    'Systems Architect',
    'Software Engineer',
    'Full-Stack Developer',
    'Samanvay',
    'SVMS',
    'PSIT Kanpur',
    'React',
    'Node.js',
    'PostgreSQL',
    'Three.js',
    'WebGL',
  ],
  authors: [{ name: 'Aditya Bhardwaj' }],
  creator: 'Aditya Bhardwaj',
  openGraph: {
    title: 'Aditya Bhardwaj — Building Systems That Move',
    description:
      'Computer Science & Engineering undergraduate portfolio. Distributed systems, real-time telemetry, and modern backend engineering.',
    url: 'https://adityabhardwaj.dev',
    siteName: 'Aditya Bhardwaj Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#050505] text-[#f4f4f6] antialiased selection:bg-white selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
