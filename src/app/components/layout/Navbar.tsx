import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Soluciones', path: '/soluciones' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1020]/95 backdrop-blur-lg border-b border-[#223252]/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#1E4ED8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-[#0A1020] font-bold text-xl">M</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#00AEEF]/20 to-[#1E4ED8]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#EAF2FF] tracking-tight">MySoft</span>
              <p className="text-xs text-[#AFC3E0] -mt-1">powered by Grupo Consulteg</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-[#00AEEF]'
                    : 'text-[#AFC3E0] hover:text-[#EAF2FF]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#00AEEF] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contacto">
              <Button variant="secondary" size="sm">
                Cotizar
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="primary" size="sm">
                Ver demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#EAF2FF] hover:text-[#00AEEF] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#223252] py-6 space-y-4 bg-[#0A1020]/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00AEEF] bg-[#00AEEF]/10'
                    : 'text-[#AFC3E0] hover:text-[#EAF2FF] hover:bg-[#101A33]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4 flex flex-col gap-3">
              <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="secondary" size="md" className="w-full">
                  Cotizar
                </Button>
              </Link>
              <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  Ver demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
