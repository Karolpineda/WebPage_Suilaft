import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Zap,
  Target,
  Lock,
  TrendingUp,
  Settings,
  CheckCircle2,
  Brain,
  Database,
  BarChart3,
  FileCheck,
  Building2,
  GraduationCap,
  Factory,
  Receipt,
  Star,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { FeatureCard } from '../components/ui/FeatureCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const stats = [
  { label: 15, suffix: ' años', sublabel: 'de experiencia' },
  { label: 100, suffix: '+', sublabel: 'clientes satisfechos' },
  { label: 500, suffix: '+', sublabel: 'proyectos completados' },
  { label: 24, suffix: '/7', sublabel: 'soporte técnico' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 22 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

export default function Home() {
  const getClientImage = (index: number) => {
    return new URL(`../img/cliente${index}.png`, import.meta.url).href;
  };

  const clients = Array.from({ length: 11 }, (_, i) => ({ id: i + 1, image: getClientImage(i + 1) }));

  const features = [
    { icon: Settings, title: 'Personalización', description: 'Software diseñado exactamente según tus necesidades empresariales y procesos únicos.' },
    { icon: TrendingUp, title: 'Escalabilidad', description: 'Soluciones que crecen contigo, adaptándose a tu expansión sin límites.' },
    { icon: Zap, title: 'Automatización', description: 'Potencia con IA para automatizar procesos y aumentar la eficiencia operativa.' },
    { icon: Lock, title: 'Seguridad', description: 'Protección de datos de nivel empresarial con los más altos estándares.' },
    { icon: FileCheck, title: 'Cumplimiento', description: 'Aseguramos el cumplimiento normativo y regulatorio en todas nuestras soluciones.' },
    { icon: Target, title: 'Integración', description: 'Conecta tus sistemas existentes sin fricciones para un ecosistema unificado.' },
  ];

  const products = [
    { icon: Shield, title: 'SUILAFT Full', description: 'Solución integral de compliance y prevención de lavado de activos con monitoreo continuo.', benefit: 'Cumplimiento total' },
    { icon: BarChart3, title: 'SUILAFT Risk', description: 'Sistema especializado en gestión y análisis de riesgos financieros y operacionales.', benefit: 'Gestión de riesgos' },
    { icon: FileCheck, title: 'SUILAFT Debidas Diligencias', description: 'Validación exhaustiva y análisis de contrapartes con IA para toma de decisiones.', benefit: 'Validación inteligente' },
    { icon: GraduationCap, title: 'ERP Institutos Superiores', description: 'Gestión académica y administrativa completa para instituciones educativas.', benefit: 'Educación eficiente' },
    { icon: Building2, title: 'ERP Capacitaciones', description: 'Control total de cursos, alumnos, procesos y certificaciones en un solo lugar.', benefit: 'Gestión integral' },
    { icon: Factory, title: 'ERP Cacaotera', description: 'Control operativo y administrativo especializado para el sector cacaotero.', benefit: 'Sector específico' },
    { icon: Receipt, title: 'ZUIPAY Facturación', description: 'Emisión y gestión de comprobantes electrónicos con cumplimiento fiscal total.', benefit: 'Facturación legal' },
    { icon: Database, title: 'Sistema Contable', description: 'Control contable y financiero completo con reportes en tiempo real.', benefit: 'Control financiero' },
  ];

  const aiFeatures = [
    'Análisis predictivo de riesgos y oportunidades',
    'Automatización de procesos repetitivos',
    'Detección de anomalías en tiempo real',
    'Insights accionables con machine learning'
  ];

  const aiMetrics = [
    { label: 'Eficiencia operativa', value: 87, color: 'from-[#00AEEF] to-[#33C3FF]', delay: 0.3 },
    { label: 'Reducción de errores', value: 92, color: 'from-[#1E4ED8] to-[#00AEEF]', delay: 0.5 },
    { label: 'Tiempo ahorrado', value: 65, color: 'from-[#00AEEF] to-[#1E4ED8]', delay: 0.7 },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-[#101A33]/50 to-[#0A1020]" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-[#00AEEF]/6 rounded-full blur-[130px]"
            animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#1E4ED8]/6 rounded-full blur-[100px]"
            animate={{ y: [0, -60, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[100px]"
            animate={{ y: [0, 50, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00AEEF]/4 rounded-full blur-[120px]" />

          {/* Animated grid */}
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

          {/* Floating particles */}
          {[
            { top: '20%', left: '15%', size: 3, delay: 0 },
            { top: '35%', right: '18%', size: 2, delay: 1.2 },
            { top: '60%', left: '25%', size: 4, delay: 0.6 },
            { top: '25%', left: '60%', size: 2, delay: 2 },
            { top: '70%', right: '30%', size: 3, delay: 1.5 },
            { top: '50%', left: '8%', size: 2, delay: 0.8 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#00AEEF]"
              style={{ top: p.top, left: (p as any).left, right: (p as any).right, width: p.size, height: p.size, opacity: 0.4 }}
              animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-8 backdrop-blur-sm"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00AEEF]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#00AEEF] text-sm font-medium">Respaldado por Grupo Consulteg</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAF2FF] mb-6 leading-tight"
            >
              Soluciones{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] via-[#7CD7FF] to-[#1E4ED8] bg-clip-text text-transparent">
                Tecnológicas
              </span>
              <br />
              que Transforman
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-[#AFC3E0] mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Desarrollo de software a medida, ERPs personalizados, soluciones con Inteligencia Artificial,
              compliance y automatización para empresas que buscan innovar.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contacto">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="primary" size="lg" className="group shadow-lg shadow-[#00AEEF]/20">
                    Cotizar ahora
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contacto">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="secondary" size="lg">Ver demo</Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={container}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#223252]"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#00AEEF] mb-1">
                    <AnimatedCounter end={stat.label} duration={2200} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[#AFC3E0]">{stat.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] to-[#101A33]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={container}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-4">
              <span className="text-[#00AEEF] text-sm font-medium">Nuestros productos</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Soluciones Destacadas
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-[#AFC3E0] max-w-2xl mx-auto">
              Software empresarial especializado para cada necesidad de tu organización
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <ProductCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  benefit={product.benefit}
                  onLearnMore={() => window.location.href = '/contacto'}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 22 }}
          >
            <Link to="/soluciones">
              <Button variant="secondary" size="lg" className="group">
                Ver todas las soluciones
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Suilaft Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={container}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E4ED8]/10 border border-[#1E4ED8]/20 rounded-full mb-4">
              <Star className="w-3.5 h-3.5 text-[#1E4ED8]" />
              <span className="text-[#1E4ED8] text-sm font-medium">Por qué elegirnos</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              ¿Por qué Suilaft?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-[#AFC3E0] max-w-2xl mx-auto">
              Más que tecnología, somos tu socio estratégico en transformación digital
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI & Technology Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/8 via-transparent to-[#1E4ED8]/8" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00AEEF]/8 rounded-full blur-[160px]"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#00AEEF]/20 rounded-3xl p-12 md:p-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6">
                  <Brain className="w-4 h-4 text-[#00AEEF]" />
                  <span className="text-[#00AEEF] text-sm font-medium">Inteligencia Artificial</span>
                </motion.div>

                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6">
                  Potenciado con{' '}
                  <span className="bg-gradient-to-r from-[#00AEEF] to-[#33C3FF] bg-clip-text text-transparent">
                    IA Avanzada
                  </span>
                </motion.h2>

                <motion.p variants={fadeUp} className="text-lg text-[#AFC3E0] mb-8 leading-relaxed">
                  Integramos automatización e inteligencia artificial en cada solución para optimizar
                  procesos, predecir tendencias y tomar decisiones basadas en datos en tiempo real.
                </motion.p>

                <motion.ul variants={container} className="space-y-4 mb-8">
                  {aiFeatures.map((item, index) => (
                    <motion.li key={index} className="flex items-start gap-3" variants={fadeUp}>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-[#EAF2FF]">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <Link to="/contacto">
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Button variant="primary" size="lg">
                        Descubrir más
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Dashboard Mock */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 80, damping: 22, delay: 0.15 }}
              >
                <div className="relative bg-[#0A1020]/60 border border-[#223252] rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    {aiMetrics.map((metric, idx) => (
                      <div key={idx}>
                        <motion.div
                          className="flex items-center justify-between mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: metric.delay }}
                        >
                          <span className="text-[#AFC3E0] text-sm">{metric.label}</span>
                          <span className="text-[#00AEEF] font-semibold">
                            {idx === 1 ? '-' : '+'}{metric.value}%
                          </span>
                        </motion.div>
                        <div className="h-2 bg-[#223252] rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.value}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: metric.delay + 0.1, duration: 1.2, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}

                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#223252]">
                      {[{ value: '24/7', label: 'Monitoreo' }, { value: '99.9%', label: 'Uptime' }, { value: '100%', label: 'Seguro' }].map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + idx * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="text-2xl font-bold text-[#00AEEF] mb-1">{stat.value}</div>
                          <div className="text-xs text-[#AFC3E0]">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00AEEF]/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1E4ED8]/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-transparent to-[#0A1020]" />
          <motion.div
            className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#00AEEF]/8 rounded-full blur-[120px]"
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/2 left-0 w-[500px] h-[500px] bg-[#1E4ED8]/8 rounded-full blur-[100px]"
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#ADD8E6]/10 border border-[#ADD8E6]/20 rounded-full mb-4">
              <span className="text-[#ADD8E6] text-sm font-medium">+11 empresas confían en nosotros</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Empresas que impulsan su crecimiento
              <br />
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                con nosotros
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-[#AFC3E0] max-w-2xl mx-auto">
              Negocios de todo el país confían en nosotros
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[#ADD8E6]/8 backdrop-blur-sm" />
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A1020] to-transparent z-10" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A1020] to-transparent z-10" />
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 p-12"
                  animate={{ x: [-1000, -5200] }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                >
                  {[...clients, ...clients].map((client, ci) => (
                    <motion.div
                      key={ci}
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <motion.div
                        className="relative w-48 h-48 flex items-center justify-center"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: (client.id % 5) * 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ADD8E6]/20 to-[#ADD8E6]/5 border-2 border-[#ADD8E6]/40 rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#ADD8E6]/70 transition-all duration-300" />
                        <div className="absolute inset-2 bg-gradient-to-br from-white/8 to-transparent rounded-xl" />
                        <img
                          src={client.image}
                          alt={`Cliente ${client.id}`}
                          className="h-32 w-32 object-contain brightness-125 contrast-150 drop-shadow-lg relative z-10"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) parent.innerHTML = `<div class="text-center font-bold text-[#ADD8E6] text-3xl z-10">${client.id}</div>`;
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80, damping: 22 }}
          >
            <div className="inline-flex items-center justify-center gap-8 px-8 py-6 bg-gradient-to-r from-[#ADD8E6]/12 to-[#00AEEF]/12 border border-[#ADD8E6]/35 rounded-2xl">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#ADD8E6] mb-1">11+</p>
                <p className="text-[#AFC3E0]">Empresas confían</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#ADD8E6]/30 to-transparent" />
              <div>
                <p className="text-lg font-semibold text-[#EAF2FF] mb-1">Transformación Digital</p>
                <p className="text-[#AFC3E0]">Para todos los sectores</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#ADD8E6]/35 to-[#ADD8E6]/20 border-2 border-[#ADD8E6]/45 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <div className="absolute inset-0 opacity-8">
              <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
            </div>

            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[80px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              className="relative z-10"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para Transformar tu Empresa?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/88 mb-10 max-w-2xl mx-auto">
                Agenda una demo personalizada o solicita una cotización sin compromiso.
                Nuestros expertos están listos para ayudarte.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contacto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="secondary" size="lg" className="bg-white text-[#0A1020] hover:bg-white/90 border-white font-semibold shadow-lg">
                      Agendar demo
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contacto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="ghost" size="lg" className="bg-white/18 text-white hover:bg-white/35 backdrop-blur-sm border border-white/55 font-semibold">
                      Solicitar cotización
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
