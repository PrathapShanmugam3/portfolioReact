"use client"

import { data } from "@/lib/data";
import { Boxes, BrainCircuit, Cloud, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, trackSpotlight } from "./reveal";
import { skillIcons } from "./skill-icons";

const categoryIcons: Record<string, typeof Boxes> = {
  Frontend: LayoutTemplate,
  Backend: Server,
  Databases: Database,
  'AI & Machine Learning': BrainCircuit,
  'DevOps & Tools': Wrench,
  'Platforms & Others': Cloud,
};

// Bento layout: some categories span two columns on large screens.
const spans = ['lg:col-span-2', '', '', 'lg:col-span-2', 'lg:col-span-2', ''];

export function Skills() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {data.skills.map((skillCategory, index) => {
        const Icon = categoryIcons[skillCategory.category] ?? Boxes;
        return (
          <Reveal key={skillCategory.category} delay={index * 90} className={cn(spans[index])}>
            <div
              onMouseMove={trackSpotlight}
              className="spotlight-card glass group h-full overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:rotate-12 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-code text-xs text-muted-foreground">
                  {String(skillCategory.technologies.length).padStart(2, '0')} tools
                </span>
              </div>
              <h3 className="mt-5 font-headline text-2xl font-bold">{skillCategory.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech) => {
                  const brand = skillIcons[tech.name];
                  return (
                    <span
                      key={tech.name}
                      className="group/pill inline-flex items-center gap-2 rounded-full border bg-background/60 px-3.5 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      {brand && (
                        <brand.icon
                          aria-hidden
                          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/pill:scale-125"
                          style={brand.color ? { color: brand.color } : undefined}
                        />
                      )}
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
