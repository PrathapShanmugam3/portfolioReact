"use client"

import { data } from "@/lib/data";
import placeholderImages from '@/lib/placeholder-images.json';
import { Project } from '@/lib/types';
import { ArrowUpRight, Github } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Kind = 'Work' | 'Personal';
type ProjectWithKind = Project & { kind: Kind };

const allProjects: ProjectWithKind[] = [
  ...data.projects.map((p) => ({ ...p, kind: 'Work' as const })),
  ...data.personalProjects.map((p) => ({ ...p, kind: 'Personal' as const })),
];

const filters = ['All', 'Work', 'Personal'] as const;
type Filter = (typeof filters)[number];

// Shown for projects without a screenshot: a question being typed and turned into SQL.
function QueryPreview() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 bg-gradient-to-br from-[hsl(var(--brand-2)/0.35)] via-card to-[hsl(var(--brand-1)/0.25)] px-6 pt-10 font-code text-xs sm:text-sm">
      <p className="text-muted-foreground">
        <span className="text-primary">ask&gt;</span> show active employees in sales
      </p>
      <div className="rounded-xl border bg-background/70 p-3 leading-relaxed backdrop-blur transition-transform duration-700 group-hover:scale-105">
        <span className="text-[hsl(var(--brand-2))]">SELECT</span> name, email{' '}
        <span className="text-[hsl(var(--brand-2))]">FROM</span> employees{' '}
        <span className="text-[hsl(var(--brand-2))]">WHERE</span> dept = <span className="text-primary">'Sales'</span>{' '}
        <span className="text-[hsl(var(--brand-2))]">AND</span> active = 1;
      </div>
      <p className="text-muted-foreground">
        <span className="text-primary">✓</span> 25 rows · JSON<span className="caret" />
      </p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ProjectWithKind; index: number }) {
  const projectImage = placeholderImages.placeholderImages.find((p) => p.id === project.image);

  // 3D tilt that follows the cursor, plus a glare highlight.
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
    el.style.setProperty('--gx', `${x * 100}%`);
    el.style.setProperty('--gy', `${y * 100}%`);
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-[transform,border-color] duration-300 ease-out hover:border-primary/60"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(500px circle at var(--gx) var(--gy), hsl(0 0% 100% / 0.1), transparent 45%)',
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        {projectImage ? (
          <Image
            src={projectImage.imageUrl}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <QueryPreview />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="glass rounded-full px-3 py-1 font-code text-xs">
            {project.kind === 'Work' ? '● Client work' : '◆ Side project'}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-code text-xs text-primary-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-foreground" />
              {project.status}
            </span>
          )}
        </div>
        <span className="absolute right-4 top-2 font-headline text-5xl font-bold text-white/80 drop-shadow-lg">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-headline text-2xl font-bold">{project.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground transition-all group-hover:line-clamp-none">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-3 py-1 font-code text-xs">
              {t}
            </span>
          ))}
        </div>
        {(project.liveDemo || project.codeLink) && (
          <div className="mt-auto flex items-center gap-3 pt-6">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                {project.liveLabel ?? 'Live demo'}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm hover:border-primary"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const filteredProjects = filter === 'All' ? allProjects : allProjects.filter((p) => p.kind === filter);

  return (
    <div>
      <Reveal className="mb-10 flex justify-center md:justify-start">
        <div className="glass relative inline-flex rounded-full p-1">
          <span
            className="absolute inset-y-1 left-1 w-28 rounded-full bg-primary transition-transform duration-500"
            style={{ transform: `translateX(${filters.indexOf(filter) * 100}%)`, transitionTimingFunction: "cubic-bezier(0.7,0,0.2,1)" }}
          />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'relative w-28 rounded-full py-2 text-sm font-medium transition-colors duration-300',
                filter === f ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {f}
              <span className="ml-1.5 font-code text-xs opacity-70">
                {f === 'All' ? allProjects.length : allProjects.filter((p) => p.kind === f).length}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          // Keying on filter re-mounts the cards so they animate in again after switching tabs.
          <Reveal key={`${filter}-${project.name}`} delay={(index % 2) * 120}>
            <ProjectCard project={project} index={allProjects.indexOf(project)} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
