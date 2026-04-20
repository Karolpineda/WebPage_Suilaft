import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import {
  Shield,
  BarChart3,
  FileCheck,
  GraduationCap,
  Building2,
  Factory,
  Receipt,
  Database,
  Code,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 22 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } }
};

const solutions = [
  {
    category: 'Compliance & Riesgos',
    description: 'Herramientas especializadas para cumplimiento normativo y gestión de riesgos financieros.',
    color: '#00AEEF',
    products: [
      { icon: Shield, title: 'SUILAFT Full', description: 'Solución integral de compliance y prevención de lavado de activos (AML/CFT). Incluye monitoreo continuo, reportes automáticos, gestión de alertas y cumplimiento normativo completo.', benefit: 'Cumplimiento total' },
      { icon: BarChart3, title: 'SUILAFT Risk', description: 'Sistema especializado en gestión y análisis de riesgos financieros y operacionales. Matrices de riesgo, scoring automático, planes de mitigación y dashboard ejecutivo.', benefit: 'Gestión de riesgos' },
      { icon: FileCheck, title: 'SUILAFT Debidas Diligencias', description: 'Validación exhaustiva y análisis de contrapartes con IA. Verificación de identidad, screening de listas restrictivas, análisis de reputación y generación de informes.', benefit: 'Validación inteligente' },
    ]
  },
  {
    category: 'ERPs Verticales',
    description: 'Sistemas de gestión empresarial adaptados a industrias específicas.',
    color: '#1E4ED8',
    products: [
      { icon: GraduationCap, title: 'ERP para Institutos Superiores', description: 'Gestión académica y administrativa completa: matrículas, horarios, calificaciones, finanzas, RRHH, bibliotecas y portales para estudiantes y docentes.', benefit: 'Educación eficiente' },
      { icon: Building2, title: 'ERP para Capacitaciones', description: 'Control total de cursos, alumnos, instructores, certificaciones, pagos y reportes. Incluye plataforma LMS integrada y emisión automática de certificados.', benefit: 'Gestión integral' },
      { icon: Factory, title: 'ERP para Cacaotera', description: 'Control operativo y administrativo especializado para el sector cacaotero: trazabilidad, control de calidad, logística, compras, ventas y gestión de productores.', benefit: 'Sector específico' },
    ]
  },
  {
    category: 'Sistemas Financieros',
    description: 'Herramientas para facturación, contabilidad y control financiero.',
    color: '#10B981',
    products: [
      { icon: Receipt, title: 'ZUIPAY Facturación Electrónica', description: 'Emisión y gestión de comprobantes electrónicos (facturas, notas de crédito/débito, guías de remisión). Integración con SRI/SUNAT, firma electrónica y reportes tributarios.', benefit: 'Facturación legal' },
      { icon: Database, title: 'Sistema Contable', description: 'Control contable y financiero completo con plan de cuentas personalizable, libro diario, mayor, balance, estados financieros y reportes en tiempo real.', benefit: 'Control financiero' },
    ]
  },
  {
    category: 'Desarrollo Personalizado',
    description: 'Soluciones únicas construidas a la medida de tu empresa.',
    color: '#7C3AED',
    products: [
      { icon: Code, title: 'Soluciones Tecnológicas a Medida', description: 'Desarrollo de software personalizado según las necesidades específicas de tu empresa. Aplicaciones web, móviles, integraciones, APIs y sistemas empresariales únicos.', benefit: 'Total flexibilidad' },
    ]
  }
];

const features = [
  { title: 'Soporte 24/7', description: 'Asistencia técnica continua' },
  { title: 'Actualizaciones', description: 'Mejoras constantes incluidas' },
  { title: 'Capacitación', description: 'Entrenamiento para tu equipo' },
  { title: 'Hosting seguro', description: 'Infraestructura enterprise' },
  { title: 'Backups diarios', description: 'Respaldo automático de datos' },
  { title: 'APIs abiertas', description: 'Integración con otros sistemas' },
  { title: 'Personalización', description: 'Adaptable a tus procesos' },
  { title: 'Reportes avanzados', description: 'Analytics y dashboards' }
];

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-hidden">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A1020]" />
        <motion.div
          className="absolute -top-16 -left-16 w-[360px] h-[360px] bg-[#00AEEF]/12 rounded-full blur-[90px]"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-[#1E4ED8]/12 rounded-full blur-[110px]"
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#00AEEF]/8 rounded-full blur-[90px]"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#6ea8ff33_1px,transparent_1px),linear-gradient(to_bottom,#6ea8ff33_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/25 rounded-full mb-6 backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              </motion.div>
              <span className="text-[#00AEEF] text-sm font-medium">Catálogo de Soluciones</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAF2FF] mb-6 leading-tight"
            >
              Soluciones{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] via-[#7CD7FF] to-[#1E4ED8] bg-clip-text text-transparent">
                Empresariales
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#AFC3E0] mb-10 max-w-2xl mx-auto">
              Software especializado para cada área de tu organización. Desde compliance hasta ERPs
              verticales, con una experiencia moderna, escalable y elegante.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contacto">
                <Button variant="primary" size="lg" className="group">
                  Solicitar asesoría
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button variant="secondary" size="lg">Conocer Suilaft</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions by category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 22, delay: categoryIndex * 0.05 }}
                className="rounded-3xl border border-[#223252] bg-gradient-to-b from-[#101A33]/70 to-[#0A1020]/70 backdrop-blur-sm p-6 md:p-10 shadow-[0_0_60px_rgba(0,174,239,0.04)]"
              >
                <div className="mb-8">
                  <motion.div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-[#AFC3E0] border border-[#2A4168] bg-[#0B162E] mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    CATEGORÍA {String(categoryIndex + 1).padStart(2, '0')}
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#EAF2FF] mb-2">
                    {category.category}
                  </h2>
                  <p className="text-[#AFC3E0] mb-4">{category.description}</p>
                  <motion.div
                    className="h-1 rounded-full"
                    style={{ background: `linear-gradient(to right, ${category.color}, transparent)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.title}
                      variants={fadeUp}
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="relative group"
                    >
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                        style={{ background: `radial-gradient(ellipse at center, ${category.color}20, transparent 70%)` }}
                      />
                      <ProductCard
                        icon={product.icon}
                        title={product.title}
                        description={product.description}
                        benefit={product.benefit}
                        onLearnMore={() => navigate('/contacto')}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features included */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[760px] h-[300px] bg-[#00AEEF]/8 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#223252] rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-[#00AEEF] text-sm font-medium">Incluido en todas las soluciones</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#EAF2FF] mb-3">
                Características Premium
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-[#AFC3E0]">
                Valor añadido en cada producto
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="bg-[#0A1020]/60 border border-[#223252] rounded-xl p-6 hover:border-[#00AEEF]/35 transition-colors duration-300 group"
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] mb-4"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.15 }}
                  />
                  <h3 className="text-[#EAF2FF] font-semibold mb-2 group-hover:text-[#00AEEF] transition-colors">{feature.title}</h3>
                  <p className="text-[#AFC3E0] text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="rounded-3xl border border-[#2A4168] bg-gradient-to-br from-[#0F1A34] to-[#0A1020] p-8 md:p-14 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#1E4ED8]/12 blur-[80px] rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.1 }}
              >
                ¿No encuentras lo que{' '}
                <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                  buscas?
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-[#AFC3E0] mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.2 }}
              >
                Creamos soluciones personalizadas para cualquier necesidad empresarial.
                Cuéntanos tu proyecto y lo hacemos realidad.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.3 }}
              >
                <Link to="/contacto">
                  <Button variant="primary" size="lg">
                    Solicitar cotización
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/nosotros">
                  <Button variant="secondary" size="lg">Conocer más de Suilaft</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
