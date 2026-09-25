import { data } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden border-t">
      <p
        aria-hidden
        className="text-outline pointer-events-none select-none whitespace-nowrap text-center font-headline text-[18vw] font-bold leading-none opacity-60"
      >
        {data.name.split(' ')[0].toUpperCase()}
      </p>
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 pb-8 md:flex-row md:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {data.name}. Designed &amp; built with Next.js.
        </p>
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          Back to top
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
