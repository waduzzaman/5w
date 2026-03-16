import type { Metadata } from 'next';
import { Playfair_Display, Josefin_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SessionProvider } from '@/components/session-provider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

export const metadata: Metadata = {
  title: '5W Communications | PR & Communications Agency',
  description: 'A premium communications and public relations agency based in Dhaka, Bangladesh.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${josefin.variable}`}>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <SessionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
