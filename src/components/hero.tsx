"use client"

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { data, whatsappUrl } from '@/lib/data';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowDown, Download, Github, Gitlab, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

const profilePic = placeholderImages.placeholderImages.find((p) => p.id === 'profile-picture');
const resumeUrl = '/Prathap_Shanmugam_Resume.pdf';

const roles = [data.title, 'Angular & React Engineer', 'Spring Boot & Node.js Dev', 'Clean-Code Enthusiast'];
const orbitChips = ['React', 'Angular', 'Spring Boot', 'Node.js'];
const socialIcons = { GitHub: Github, GitLab: Gitlab, LinkedIn: Linkedin } as const;

const stats = [
  { value: 3, suffix: '+', label: 'Years experience', decimals: 0 },
  { value: data.projects.length + data.personalProjects.length, suffix: '', label: 'Projects shipped', decimals: 0 },
  {
    value: data.skills.reduce((n, c) => n + c.technologies.length, 0),
    suffix: '+',
    label: 'Technologies',
    decimals: 0,
  },
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === '';
    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          return setWordIndex((i) => i + 1);
        }
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      },
      done ? 1800 : deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function CountUp({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1600, 1);
        setCurrent(value * (1 - Math.pow(1 - t, 3)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Hero() {
  const role = useTypewriter(roles);
  const [firstName, ...rest] = data.name.split(' ');

  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-center">
      <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div
            className="animate-fade-up glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
            style={{ animationDelay: '0ms' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </div>

          <h1
            className="animate-fade-up mt-6 font-headline text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ animationDelay: '120ms' }}
          >
            <span className="block text-2xl font-medium tracking-normal text-muted-foreground sm:text-3xl">
              Hi, I&apos;m <span className="animate-wave">👋</span>
            </span>
            <span className="mt-2 block">{firstName}</span>
            <span className="text-gradient block">{rest.join(' ')}</span>
          </h1>

          <p
            className="animate-fade-up mt-6 h-8 font-code text-lg text-foreground/90 sm:text-xl"
            style={{ animationDelay: '240ms' }}
          >
            <span className="text-primary">&gt;</span> <span className="caret">{role}</span>
          </p>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground lg:mx-0"
            style={{ animationDelay: '360ms' }}
          >
            I design and build scalable web applications with Angular, React, Spring Boot and Node.js, from
            pixel-perfect interfaces to fast, reliable REST APIs.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: '480ms' }}
          >
            <a
              href={resumeUrl}
              download="Prathap_Shanmugam_Resume.pdf"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <Mail className="h-4 w-4" />
              Let&apos;s talk
            </a>
            <div className="flex items-center gap-1">
              {data.socials.map((social) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:bg-secondary hover:text-primary"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:bg-secondary hover:text-[#25D366]"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
            style={{ animationDelay: '600ms' }}
          >
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4 text-primary" /> {data.email}
            </a>
            <a href={`tel:${data.mobile}`} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" /> {data.mobile}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {data.workExperience[0].location}, India
            </span>
          </div>
        </div>

        <div className="animate-fade-up order-1 flex justify-center lg:order-2" style={{ animationDelay: '200ms' }}>
          <div className="animate-float relative h-72 w-72 sm:h-96 sm:w-96">
            {/* orbit track with chips */}
            <div className="absolute -inset-6 rounded-full border border-dashed border-foreground/15 sm:-inset-10" />
            <div className="absolute -inset-6 animate-[spin_24s_linear_infinite] sm:-inset-10">
              {orbitChips.map((chip, i) => {
                const angle = ((i * 90 - 45) * Math.PI) / 180;
                return (
                  <div
                    key={chip}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
                  >
                    <span className="glass block animate-[spin-reverse_24s_linear_infinite] whitespace-nowrap rounded-full px-3 py-1 font-code text-xs shadow-lg">
                      {chip}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* spinning gradient ring + photo */}
            <div className="ring-spin absolute inset-0 rounded-full blur-2xl opacity-60" />
            <div className="ring-spin absolute inset-0 rounded-full" />
            <div className="absolute inset-[5px] overflow-hidden rounded-full bg-background">
              {profilePic && (
                <Image
                  src={profilePic.imageUrl}
                  alt={data.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 640px) 288px, 384px"
                />
              )}
            </div>

            <div className="glass absolute -bottom-2 -left-4 rounded-2xl px-4 py-3 shadow-xl sm:-left-8">
              <p className="font-code text-[10px] uppercase tracking-widest text-muted-foreground">Currently at</p>
              <p className="font-headline text-sm font-semibold">OASYS Cybernetics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="animate-fade-up glass rounded-3xl p-4 text-center sm:p-6"
            style={{ animationDelay: `${700 + i * 120}ms` }}
          >
            <p className="text-gradient font-headline text-3xl font-bold sm:text-5xl">
              <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <a
        href="#experience"
        aria-label="Scroll down"
        className="mx-auto mt-12 hidden h-12 w-7 justify-center rounded-full border-2 border-foreground/20 pt-2 md:flex"
      >
        <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
      </a>
    </section>
  );
}
