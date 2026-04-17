import { motion } from 'framer-motion';
import { HiSparkles, HiChip, HiTrendingUp, HiSupport } from 'react-icons/hi';

const reasons = [
  {
    icon: HiSparkles,
    title: 'ADN Técnico y Consultor',
    description:
      'No somos solo programadores. Entendemos tu negocio primero y luego aplicamos la tecnología adecuada para optimizarlo.',
  },
  {
    icon: HiChip,
    title: 'Stack Tecnológico Avanzado',
    description:
      'Desarrollamos con los estándares más altos: React, Node.js, Python e IA para asegurar rendimiento y seguridad.',
  },
  {
    icon: HiTrendingUp,
    title: 'Soluciones que Escalan',
    description:
      'Diseñamos arquitectura sólida desde el primer día. Tu sistema soportará tu crecimiento hoy y en 5 años.',
  },
  {
    icon: HiSupport,
    title: 'Aliado Tecnológico Real',
    description:
      'Acompañamiento a largo plazo. Garantizamos soporte, mantenimiento y evolución continua de tus plataformas.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-navy-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Header & Text (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-sm font-bold text-blue-light uppercase tracking-wider">
              Nuestro Diferencial
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              ¿Por qué elegir <br className="hidden lg:block"/> 
              <span className="gradient-text">My Soft?</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed mb-8">
              En la era digital, la tecnología no es un gasto, es tu <strong>mayor ventaja competitiva</strong>. Nos asociamos contigo para crear activos digitales que realmente valen la pena.
            </p>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-navy-darker bg-blue-light hover:bg-white rounded-full transition-colors duration-300 shadow-lg glow-btn-blue"
            >
              Hablar con un experto
            </a>
          </motion.div>

          {/* Cards Grid (Right) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card p-8 rounded-3xl border border-white/5 hover:border-blue-light/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-blue-mid/20 text-blue-light flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-light group-hover:text-navy-darker transition-all duration-300">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
