import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CWrite - Human Layer in AI Copywriting',
  description: 'Revolutionize your content creation with AI-powered copywriting that maintains the human touch. Create compelling copy for multiple platforms.',
  keywords: 'AI copywriting, content creation, marketing, SEO, copywriter, artificial intelligence',
  openGraph: {
    title: 'CWrite - Human Layer in AI Copywriting',
    description: 'Revolutionize your content creation with AI-powered copywriting that maintains the human touch.',
    type: 'website',
    url: 'https://cwrite.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CWrite - Human Layer in AI Copywriting',
    description: 'Revolutionize your content creation with AI-powered copywriting that maintains the human touch.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}