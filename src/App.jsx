import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Systems from './components/Systems';
import AIDemo from './components/AIDemo';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-deeper">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Systems />
        <AIDemo />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
