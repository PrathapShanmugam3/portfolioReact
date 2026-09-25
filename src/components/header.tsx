"use client"

import React, { useEffect, useState } from 'react';
import { data } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import { ThemeToggleButton } from './theme-toggle-button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const initials = data.name
  .split(' ')
  .map((part) => part[0])
  .join('');

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 10);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="absolute left-0 top-0 h-[3px] origin-left bg-gradient-to-r from-[hsl(var(--brand-1))] via-[hsl(var(--brand-3))] to-[hsl(var(--brand-2))]"
        style={{ transform: `scaleX(${progress})`, width: '100%' }}
      />
      <div className="px-3 pt-4">
      <div
        className={cn(
          'mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full px-3 pl-4 transition-all duration-500',
          isScrolled ? 'glass shadow-lg shadow-black/10' : 'border border-transparent'
        )}
      >
        <a href="#hero" className="group flex items-center gap-2 font-headline font-bold">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full">
            <span className="ring-spin absolute inset-0" />
            <span className="absolute inset-[2px] rounded-full bg-background" />
            <span className="relative text-sm">{initials}</span>
          </span>
          <span className="hidden sm:inline">
            {data.name.split(' ')[0]}
            <span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'relative rounded-full px-3.5 py-1.5 transition-colors',
                active === link.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggleButton />
          <button
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      </div>

      <div
        className={cn(
          'glass mx-3 mt-2 overflow-hidden rounded-3xl transition-all duration-500 md:hidden',
          isMenuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col p-3">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'flex items-center justify-between rounded-2xl px-4 py-3 font-headline text-lg transition-colors',
                active === link.href ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              )}
            >
              {link.name}
              <span className="font-code text-xs opacity-60">0{i + 1}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
