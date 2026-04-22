import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTiktok, href: '#', label: 'TikTok' },
];

const footerLinks = [
  {
    title: 'Plataformas',
    links: ['SUILAF', 'ZuiPay', 'ERP MySoft', 'Módulos ISS'],
  },
  {
    title: 'Servicios',
    links: ['Desarrollo a Medida', 'Automatización IA', 'Integraciones', 'Consultoría'],
  },
  {
    title: 'Empresa',
    links: ['Sobre Nosotros', 'Grupo ConsulTeg', 'Blog', 'Carreras'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gray-border/30 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-light/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-mid to-blue-light flex items-center justify-center shadow-md shadow-blue-light/20">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-family-heading)] text-white">
                My Soft
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Parte de <strong className="text-white/60">Grupo ConsulTeg</strong>.
              Desarrollamos software empresarial a medida con tecnología de vanguardia.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+593984013431"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-blue-light transition-colors"
              >
                <HiPhone className="w-4 h-4" />
                +593 984 013 431
              </a>
              <a
                href="gcomercial@grupoconsulteg.com"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-blue-light transition-colors"
              >
                <HiMail className="w-4 h-4" />
                gcomercial@grupoconsulteg.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <HiLocationMarker className="w-4 h-4" />
                Quito, El Tiempo y El Comercio, Edificio El Tiempo N37-83, piso 8
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-gray-border/30 hover:bg-blue-light/10 hover:border-blue-light/20 flex items-center justify-center text-white/40 hover:text-blue-light transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/70 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-blue-light transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} My Soft · Grupo ConsulTeg. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
