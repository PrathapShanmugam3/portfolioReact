import { data } from '@/lib/data';
import { Sparkle } from 'lucide-react';

const techNames = Array.from(new Set(data.skills.flatMap((c) => c.technologies.map((t) => t.name))));
// Scale duration with the list length so the scroll speed stays constant (~60px/s) as skills are added.
const SECONDS_PER_ITEM = 4;
const duration = `${techNames.length * SECONDS_PER_ITEM}s`;

function Row({ reverse = false }: { reverse?: boolean }) {
  // The list is rendered twice so translating by -50% loops seamlessly.
  return (
    <div className="flex overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
        style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: duration }}
      >
        {[...techNames, ...techNames].map((name, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-headline text-2xl font-semibold md:text-3xl">
            {name}
            <Sparkle className="h-5 w-5 text-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="relative -mx-4 my-8 -rotate-2 space-y-3 border-y bg-card/60 py-5 backdrop-blur md:-mx-8"
      style={{ maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}
    >
      <Row />
      <div className="text-outline">
        <Row reverse />
      </div>
    </div>
  );
}
