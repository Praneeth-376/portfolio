import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import ResumeSection from '../sections/ResumeSection';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ResumeSection />
      <Contact />
    </main>
  );
};

export default Home;