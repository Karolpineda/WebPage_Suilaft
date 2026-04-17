import { motion } from 'framer-motion';
import { HiCode, HiCog, HiDatabase, HiLink } from 'react-icons/hi';

const services = [
  {
    icon: HiCode,
    title: 'Desarrollo a Medida',
    description:
      'Construimos software que se adapta a tus reglas de negocio, no al revés. Sistemas escalables que evolucionan con tu empresa.',
    highlight: 'Arquitectura escalable',
    stats: { value: '100%', label: 'Personalizado' },
  },
  {
    icon: HiCog,
    title: 'Automatización & IA',
    description:
      'Transformamos tareas manuales en flujos automáticos inteligentes. Deja que la tecnología trabaje por ti 24/7.',
    highlight: 'Ahorro de tiempo operativo',
    stats: { value: '24/7', label: 'Disponibilidad' },
  },
  {
    icon: HiDatabase,
    title: 'Sistemas Core (ERP/CRM)',
    description:
      'Plataformas integrales para gobernar tu operación. Facturación, inventario, ventas y cumplimiento en un solo lugar seguro.',
    highlight: 'Centralización de datos',
    stats: { value: '360°', label: 'Control visual' },
  },
  {
    icon: HiLink,
    title: 'Integración API',
    description:
      'Hacemos que tus sistemas hablen entre sí. Conectamos pasarelas de pago, entidades gubernamentales y servicios cloud.',
    highlight: 'Conexión sin fricción',
    stats: { value: '∞', label: 'Conexiones' },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Subtle mesh background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at 15% 50%, rgba(79, 163, 209, 0.08) 0%, transparent 40%),
                       radial-gradient(circle at 85% 30%, rgba(46, 91, 140, 0.08) 0%, transparent 40%)`
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-bold text-blue-light uppercase tracking-wider bg-blue-light/10 px-4 py-1.5 rounded-full border border-blue-light/20">
            Nuestros Servicios
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Tecnología que <span className="gradient-text">acelera</span> tu negocio
          </h2>
          <p className="mt-5 text-lg text-white/60">
            No vendemos software genérico. Diseñamos e implementamos soluciones estratégicas que resuelven problemas reales y generan impacto medible.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Top gradient edge */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-mid to-blue-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="flex items-start justify-between mb-6">
                {/* Icon block */}
                <div className="w-16 h-16 rounded-2xl bg-blue-mid/20 flex items-center justify-center group-hover:bg-blue-light/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-light group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Stat badge */}
                <div className="text-right">
                  <p className="text-2xl font-black text-white">{service.stats.value}</p>
                  <p className="text-xs font-medium text-white/50 tracking-wide uppercase">{service.stats.label}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">{service.description}</p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-mid/20 border border-blue-mid/30">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-light" />
                <span className="text-xs font-bold text-blue-light">{service.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
