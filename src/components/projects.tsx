"use client"
import { data } from "@/lib/data";
import placeholderImages from '@/lib/placeholder-images.json';
import { PortfolioData, Project } from '@/lib/types';
import { ArrowUpRight, Github } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


export function Projects() {
  const typedData = data as PortfolioData;
  const allProjects: Project[] = [...typedData.projects, ...typedData.personalProjects];
  const allTech = ["All", ...Array.from(new Set(allProjects.flatMap(p => p.tech)))];

  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.tech.includes(filter));

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="w-full sm:w-64">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by technology" />
            </SelectTrigger>
            <SelectContent>
              {allTech.map(tech => (
                <SelectItem key={tech} value={tech}>{tech}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => {
          const projectImage = placeholderImages.placeholderImages.find((p: any) => p.id === project.image);
          return (
            <Card key={index} className="flex flex-col group hover:border-primary transition-colors overflow-hidden">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.name}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow relative">
                <p className="text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">{project.description}</p>
                {projectImage && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.name}
                      fill
                      data-ai-hint={projectImage.imageHint}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  {project.liveDemo && (
                    <Button variant="outline" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noreferrer">
                        Live Demo <ArrowUpRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button variant="ghost" asChild>
                      <a href={project.codeLink} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}