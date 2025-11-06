import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AiPersonalizer } from '@/components/ai-personalizer';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';
import { data } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const sectionGap = "py-16 lg:py-24";
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 md:px-8">
        <div id="hero" className="pt-24 lg:pt-32">
          <Hero />
        </div>
        <div id="ai-personalizer" className={sectionGap}>
           <h2 className="text-3xl font-bold tracking-tight text-center font-headline mb-12">AI-Powered Personalization</h2>
          <AiPersonalizer portfolioSummary={data.summary} />
        </div>
        <div id="experience" className={sectionGap}>
           <h2 className="text-3xl font-bold tracking-tight text-center font-headline mb-12">Work Experience</h2>
          <Experience />
        </div>
        <div id="skills" className={sectionGap}>
          <h2 className="text-3xl font-bold tracking-tight text-center font-headline mb-12">Key Skills</h2>
          <Skills />
        </div>
        <div id="projects" className={sectionGap}>
          <h2 className="text-3xl font-bold tracking-tight text-center font-headline mb-12">Projects</h2>
          <Projects />
        </div>
        <div id="education" className={sectionGap}>
          <h2 className="text-3xl font-bold tracking-tight text-center font-headline mb-12">Education & Certifications</h2>
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
}
