import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp';
import ScrollToTop from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0A1020]">
      <Navbar />
      <ScrollToTop />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}