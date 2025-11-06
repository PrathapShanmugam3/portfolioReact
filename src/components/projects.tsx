"use client"
import { useState } from "react";
import { data } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";

export function Projects() {
  const allProjects = [...data.projects, ...data.personalProjects];
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
        {filteredProjects.map((project, index) => (
          <Card key={index} className="flex flex-col group hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.name}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                {'liveDemo' in project && project.liveDemo && (
                   <Button variant="outline" asChild>
                     <a href={project.liveDemo} target="_blank" rel="noreferrer">
                       Live Demo <ArrowUpRight className="h-4 w-4 ml-2" />
                     </a>
                   </Button>
                )}
                 {'codeLink' in project && project.codeLink && (
                   <Button variant="ghost" asChild>
                     <a href={project.codeLink} target="_blank" rel="noreferrer">
                       <Github className="h-4 w-4 mr-2" /> View Code
                     </a>
                   </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
