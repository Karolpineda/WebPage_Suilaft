import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-bg" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(79,163,209,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(79,163,209,0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glow */}
      <div className="glow-circle w-[600px] h-[600px] bg-blue-light/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm mb-8">
            🚀 Tu visión, nuestra tecnología
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Convierte tu idea en{' '}
          <span className="relative inline-block">
            software real
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-light to-blue-neon rounded-full origin-left"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-white/60 max-w-2xl mx-auto"
        >
          Agenda una reunión sin compromiso y descubre cómo la inteligencia artificial
          y la automatización pueden transformar tu empresa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/593984013431"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-navy-deeper bg-gradient-to-r from-blue-light to-blue-neon rounded-full shadow-2xl transition-all duration-300"
            style={{ boxShadow: '0 8px 40px rgba(91,192,255,0.3)' }}
          >
            Solicitar Demo Gratis
            <HiArrowRight className="w-4 h-4" />
          </motion.a>
          <a
            href="mailto:info@mysoft.ec"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
          >
            ✉ info@mysoft.ec
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-xs text-white/40"
        >
          Sin compromiso · Respuesta en menos de 24 horas · Consulta gratuita
        </motion.p>
      </div>
    </section>
  );
}
