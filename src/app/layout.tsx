
import type {Metadata} from 'next';
import Link from 'next/link';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { SheetTitle } from '@/components/ui/sheet';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ECommerce Tools',
  description: 'Tools for Amazon and Flipkart keyword/product research.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-gradient-to-br from-background to-muted/20 min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-primary hover:text-primary/80 transition-colors">
              ECommerce Tools
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Button variant="ghost" asChild className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2">
                <Link href="/">Amazon Research</Link>
              </Button>
              <Button variant="ghost" asChild className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2">
                <Link href="/flipkart-scrapper">Flipkart Scrapper</Link>
              </Button>
              <Button variant="ghost" asChild className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2">
                <Link href="/about">About</Link>
              </Button>
            </nav>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </header>
        <main className="flex-1 w-full">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
