import { Reveal } from './reveal';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  highlight: string;
}

export function SectionHeading({ index, eyebrow, title, highlight }: SectionHeadingProps) {
  return (
    <Reveal className="relative mb-14">
      <span
        aria-hidden
        className="text-outline absolute -top-10 -left-2 select-none font-headline text-[7rem] font-bold leading-none md:text-[9rem]"
      >
        {index}
      </span>
      <p className="relative font-code text-sm uppercase tracking-[0.3em] text-primary">
        <span className="mr-3 inline-block h-px w-10 bg-primary align-middle" />
        {eyebrow}
      </p>
      <h2 className="relative mt-3 font-headline text-4xl font-bold tracking-tight md:text-5xl">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
    </Reveal>
  );
}
