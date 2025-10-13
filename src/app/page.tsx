import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import CVSection from '@/components/CVSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-white-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <CVSection />
    </main>
  );
}