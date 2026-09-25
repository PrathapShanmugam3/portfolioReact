import { Background } from '@/components/background';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { Projects } from '@/components/projects';
import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  const sectionGap = "scroll-mt-24 py-20 lg:py-28";
  return (
    <div className="relative overflow-x-clip text-foreground">
      <Background />
      <Header />
      <main className="container mx-auto max-w-6xl px-4 md:px-8">
        <div id="hero" className="scroll-mt-24 pt-28 lg:pt-32">
          <Hero />
        </div>
        <Marquee />
        <section id="experience" className={sectionGap}>
          <SectionHeading index="01" eyebrow="Where I've worked" title="Work" highlight="Experience" />
          <Experience />
        </section>
        <section id="skills" className={sectionGap}>
          <SectionHeading index="02" eyebrow="My toolbox" title="Skills &" highlight="Technologies" />
          <Skills />
        </section>
        <section id="projects" className={sectionGap}>
          <SectionHeading index="03" eyebrow="Things I've built" title="Featured" highlight="Projects" />
          <Projects />
        </section>
        <section id="education" className={sectionGap}>
          <SectionHeading index="04" eyebrow="Learning path" title="Education &" highlight="Certifications" />
          <Education />
        </section>
        <section id="contact" className={sectionGap}>
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
