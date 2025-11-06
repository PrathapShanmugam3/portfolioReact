"use client"

import React, { useState, useEffect } from 'react';
import { data } from '@/lib/data';
import { Button } from './ui/button';
import { Github, Gitlab, Linkedin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggleButton } from './theme-toggle-button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent border-b border-transparent"
    )}>
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-headline text-lg font-bold tracking-tight">
            {data.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
             <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={data.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={data.socials.find(s => s.name === 'GitLab')?.url} target="_blank" rel="noreferrer">
                    <Gitlab className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={data.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
            </div>
            <ThemeToggleButton />
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center gap-4 text-base font-medium px-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-muted-foreground transition-colors hover:text-foreground w-full text-center py-2 rounded-md hover:bg-accent">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
