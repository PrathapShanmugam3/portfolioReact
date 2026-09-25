"use client"

import { data } from "@/lib/data";
import { Certification } from "@/lib/types";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, trackSpotlight } from "./reveal";

interface TimelineItem {
  icon: typeof Award;
  tag: string;
  title: string;
  institution?: string;
  period: string;
  detail?: string;
  courses?: Certification[];
}

// Certifications from the same institution are grouped into a single card.
const certGroups = Array.from(
  data.certifications
    .reduce((groups, cert) => {
      groups.set(cert.institution, [...(groups.get(cert.institution) ?? []), cert]);
      return groups;
    }, new Map<string, Certification[]>())
    .entries()
);

const items: TimelineItem[] = [
  ...data.education.map((edu) => ({
    icon: GraduationCap,
    tag: 'Education',
    title: edu.degree,
    institution: edu.institution,
    period: edu.period,
    detail: edu.grade,
  })),
  ...certGroups.map(([institution, certs]): TimelineItem => {
    if (certs.length === 1) {
      const [cert] = certs;
      return {
        icon: Award,
        tag: 'Certification',
        title: cert.name,
        institution,
        period: cert.period,
        detail: cert.credentialId ? `Credential ID: ${cert.credentialId}` : undefined,
      };
    }
    return {
      icon: Award,
      tag: `${certs.length} Certifications`,
      title: institution,
      period: Array.from(new Set(certs.map((c) => c.period))).join(' · '),
      courses: certs,
    };
  }),
];

export function Education() {
  return (
    <div className="relative">
      {/* timeline spine */}
      <div className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-[hsl(var(--brand-1))] via-[hsl(var(--brand-3))] to-[hsl(var(--brand-2))] md:left-1/2" />

      <div className="space-y-10">
        {items.map((item, index) => {
          const Icon = item.icon;
          const right = index % 2 === 1;
          return (
            <div key={index} className="relative grid md:grid-cols-2 md:gap-16">
              <div className="absolute left-6 top-6 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg shadow-primary/40 md:left-1/2">
                <Icon className="h-5 w-5" />
              </div>
              <Reveal delay={index * 100} className={right ? 'md:col-start-2' : 'md:text-right'}>
                <div
                  onMouseMove={trackSpotlight}
                  className="spotlight-card glass ml-16 rounded-[1.75rem] p-6 transition-transform duration-500 hover:-translate-y-1 md:ml-0"
                >
                  <div className={`flex flex-wrap items-center gap-2 ${right ? '' : 'md:justify-end'}`}>
                    <span className="rounded-full bg-secondary px-3 py-1 font-code text-xs text-primary">{item.tag}</span>
                    <span className="font-code text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-bold leading-snug">{item.title}</h3>
                  {item.institution && <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>}
                  {item.detail && <p className="text-gradient mt-3 font-headline font-semibold">{item.detail}</p>}
                  {item.courses && (
                    <ul className="mt-5 space-y-2.5">
                      {item.courses.map((course) => (
                        <li
                          key={course.name}
                          className={cn(
                            'group/course flex items-start gap-3 rounded-2xl border bg-background/50 p-3.5 transition-colors hover:border-primary/60',
                            !right && 'md:flex-row-reverse'
                          )}
                        >
                          <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform group-hover/course:scale-110" />
                          <div>
                            <p className="font-headline font-semibold leading-snug">{course.name}</p>
                            {course.credentialId && (
                              <p className="mt-1 font-code text-xs text-muted-foreground">
                                ID: {course.credentialId}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
