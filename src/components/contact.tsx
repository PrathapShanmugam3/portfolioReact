"use client"

import { useState } from 'react';
import { data, whatsappUrl } from '@/lib/data';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight, Check, Copy, Github, Gitlab, Linkedin, Mail, Phone } from 'lucide-react';
import { Reveal } from './reveal';

const socialIcons = { GitHub: Github, GitLab: Gitlab, LinkedIn: Linkedin } as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${data.email}`;
    }
  };

  return (
    <Reveal>
      <div className="relative isolate overflow-hidden rounded-[2.5rem] border p-8 text-center md:p-16">
        <div aria-hidden className="ring-spin absolute -inset-[30%] -z-10 opacity-25 blur-3xl" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-card/80 backdrop-blur-xl" />

        <p className="font-code text-sm uppercase tracking-[0.3em] text-primary">05 · Contact</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-headline text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Have a project in mind? <span className="text-gradient">Let&apos;s build it together.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          I&apos;m open to full-time roles and freelance work. Drop me a message and I&apos;ll get back to you soon.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${data.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1"
          >
            <Mail className="h-5 w-5" />
            Say hello
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-medium text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:-translate-y-1"
          >
            <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
            Chat on WhatsApp
          </a>
          <button
            onClick={copyEmail}
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-4 font-code text-sm transition-colors hover:border-primary"
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied!' : data.email}
          </button>
          <a
            href={`tel:${data.mobile}`}
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-4 font-code text-sm transition-colors hover:border-primary"
          >
            <Phone className="h-4 w-4" /> {data.mobile}
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {data.socials.map((social) => {
            const Icon = socialIcons[social.name as keyof typeof socialIcons];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="grid h-12 w-12 place-items-center rounded-full border transition-all hover:-translate-y-1 hover:rotate-6 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
