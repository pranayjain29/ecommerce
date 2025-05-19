
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MobileNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle>
            <Link href="/" className="text-lg font-semibold text-primary" onClick={closeMenu}>
              ECommerce Tools
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-1 p-4">
          <Button variant="ghost" asChild className="w-full justify-start text-base px-3 py-2" onClick={closeMenu}>
            <Link href="/">Amazon Research</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-base px-3 py-2" onClick={closeMenu}>
            <Link href="/flipkart-scrapper">Flipkart Scrapper</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-base px-3 py-2" onClick={closeMenu}>
            <Link href="/about">About</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
