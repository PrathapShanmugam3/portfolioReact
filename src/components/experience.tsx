"use client"

import { data } from "@/lib/data"
import { Briefcase, CheckCircle2, MapPin } from "lucide-react"
import { Reveal, trackSpotlight } from "./reveal"

export function Experience() {
  return (
    <div className="relative space-y-10">
      {data.workExperience.map((job, index) => (
        <Reveal key={index}>
          <div
            onMouseMove={trackSpotlight}
            className="spotlight-card glass grid gap-8 rounded-[2rem] p-6 md:grid-cols-[240px_1fr] md:p-10"
          >
            <div className="md:sticky md:top-28 md:self-start">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-code text-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                {job.period}
              </p>
              <h3 className="mt-4 font-headline text-2xl font-bold leading-tight">{job.company}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {job.location}
              </p>
            </div>

            <div>
              <p className="font-headline text-xl font-semibold text-gradient">{job.role}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {job.tasks.map((task, i) => (
                  <Reveal
                    as="li"
                    key={i}
                    delay={i * 70}
                    className="group flex gap-3 rounded-2xl border border-transparent bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform group-hover:scale-125" />
                    {task}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
