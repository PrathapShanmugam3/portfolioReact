import { data } from "@/lib/data";
import { Button } from "./ui/button";
import { Github, Gitlab, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-5xl px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {data.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={data.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={data.socials.find(s => s.name === 'GitLab')?.url} target="_blank" rel="noreferrer" aria-label="GitLab">
              <Gitlab className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={data.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
