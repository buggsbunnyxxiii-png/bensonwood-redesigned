import Nav from './components/Nav';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import { CTA, Feature, Footer, Homes, Intro, Marquee, Millwork, Process, Quote } from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Homes />
        <Feature />
        <Portfolio />
        <Process />
        <Millwork />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
