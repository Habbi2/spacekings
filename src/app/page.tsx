import Hero from '@/components/Hero';
import About from '@/components/About';
import Socials from '@/components/Socials';
import Competitions from '@/components/Competitions';
import Tryouts from '@/components/Tryouts';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
  <JoinUs />
      <Socials />
      <Competitions />
      <Tryouts />
      <Footer />
    </main>
  );
}
