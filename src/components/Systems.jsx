import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiShieldCheck,
  HiDocumentReport,
  HiAcademicCap,
  HiCash,
  HiCalculator,
  HiCube,
  HiCog,
  HiViewGrid,
  HiArrowRight,
} from 'react-icons/hi';

const products = [
  {
    id: 'suilaf',
    name: 'SUILAF',
    tagline: 'Cumplimiento y gestión de riesgos',
    color: 'from-blue-mid to-blue-light',
    glow: 'rgba(79,163,209,0.2)',
    modules: [
      {
        icon: HiShieldCheck,
        title: 'Software',
        desc: 'Con SUILAFT, tu matriz de riesgo deja de ser un archivo olvidado y se convierte en un sistema vivo. Evalúa contrapartes con diligencia documentada, verifica PEP y listas sin fricción y prepara reportes con evidencia clara. Integra ERP/CRM MySoft para mantener procesos y finanzas sincronizados.',
      },
      {
        icon: HiDocumentReport,
        title: 'Consultoría',
        desc: 'Te ayudamos a tomar decisiones que resisten auditorías. Segmentamos riesgos, normalizamos procesos, documentamos políticas y acompañamos a tu Oficial de Cumplimiento en lo que realmente importa.',
      },
      {
        icon: HiAcademicCap,
        title: 'Academia',
        desc: 'Formaciones para aplicar mañana. Cursos y talleres con casos de tu sector; materiales listos y un espacio para resolver dudas reales en comunidad.',
      },
    ],
  },
  {
    id: 'zuipay',
    name: 'ZuiPay',
    tagline: 'Facturación y contabilidad inteligente',
    color: 'from-green-400 to-emerald-400',
    glow: 'rgba(52,211,153,0.2)',
    modules: [
      {
        icon: HiCash,
        title: 'Facturación',
        desc: 'Emite facturas electrónicas conforme a la normativa vigente. Automatiza descuentos, impuestos y retenciones. Integración directa con el SRI para validación en tiempo real.',
      },
      {
        icon: HiCalculator,
        title: 'Sistema Contable',
        desc: 'Contabilidad integrada con tus procesos de facturación. Asientos automáticos, estados financieros en tiempo real y reporting listo para auditorías.',
      },
    ],
  },
  {
    id: 'erp',
    name: 'ERP MySoft',
    tagline: 'Gestión empresarial integral',
    color: 'from-purple-400 to-violet-400',
    glow: 'rgba(139,92,246,0.2)',
    modules: [
      {
        icon: HiCube,
        title: 'Equipos / ERP',
        desc: 'Gestión de inventarios, activos, compras y proveedores en una sola plataforma. Control total de tu cadena operativa con dashboards en tiempo real.',
      },
      {
        icon: HiCog,
        title: 'Gestión de Servicios',
        desc: 'Desde la solicitud hasta la entrega. Seguimiento de tickets, SLAs, asignación de recursos y métricas de rendimiento para optimizar tus operaciones de servicio.',
      },
      {
        icon: HiViewGrid,
        title: 'Módulos Personalizados',
        desc: 'Desarrollamos módulos ISS y soluciones a medida que se integran con tu ecosistema existente. Si tu proceso es único, tu sistema también debería serlo.',
      },
    ],
  },
];

export default function Systems() {
  const [active, setActive] = useState('suilaf');
  const activeProduct = products.find((p) => p.id === active);

  return (
    <section id="systems" className="py-24 md:py-32 bg-navy-deeper relative overflow-hidden mesh-gradient">
      <div className="glow-circle w-[500px] h-[500px] bg-blue-mid/5 top-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-light uppercase tracking-wider">
            Plataformas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Nuestros <span className="gradient-text">sistemas</span>
          </h2>
          <p className="mt-4 text-white/50">
            Ecosistema de plataformas diseñadas para cubrir cada área crítica de tu operación.
          </p>
        </motion.div>

        {/* Product tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === p.id
                  ? `bg-gradient-to-r ${p.color} text-white shadow-lg`
                  : 'bg-surface-light text-white/50 border border-gray-border/50 hover:border-blue-light/20 hover:text-white/80'
              }`}
              style={active === p.id ? { boxShadow: `0 8px 30px ${p.glow}` } : {}}
            >
              {p.name}
            </button>
          ))}
        </motion.div>

        {/* Active product */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">{activeProduct.name}</h3>
              <p className="text-white/40 mt-1">{activeProduct.tagline}</p>
            </div>

            <div className={`grid gap-6 ${activeProduct.modules.length === 2 ? 'sm:grid-cols-2 max-w-3xl mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {activeProduct.modules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group card-glow bg-surface rounded-2xl p-6 border border-gray-border/50 hover:border-blue-light/20 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeProduct.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    style={{ boxShadow: `0 8px 25px ${activeProduct.glow}` }}
                  >
                    <mod.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{mod.title}</h4>
                  <p className="text-sm text-white/45 leading-relaxed">{mod.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-blue-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber más <HiArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
