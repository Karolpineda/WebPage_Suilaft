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
  Receipt
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

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Importar imágenes de clientes
  const getClientImage = (index: number) => {
    return new URL(`../img/cliente${index}.png`, import.meta.url).href;
  };

  const clients = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    image: getClientImage(i + 1)
  }));

  const features = [
    {
      icon: Settings,
      title: 'Personalización',
      description: 'Software diseñado exactamente según tus necesidades empresariales y procesos únicos.'
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidad',
      description: 'Soluciones que crecen contigo, adaptándose a tu expansión sin límites.'
    },
    {
      icon: Zap,
      title: 'Automatización',
      description: 'Potencia con IA para automatizar procesos y aumentar la eficiencia operativa.'
    },
    {
      icon: Lock,
      title: 'Seguridad',
      description: 'Protección de datos de nivel empresarial con los más altos estándares.'
    },
    {
      icon: FileCheck,
      title: 'Cumplimiento',
      description: 'Aseguramos el cumplimiento normativo y regulatorio en todas nuestras soluciones.'
    },
    {
      icon: Target,
      title: 'Integración',
      description: 'Conecta tus sistemas existentes sin fricciones para un ecosistema unificado.'
    },
  ];

  const products = [
    {
      icon: Shield,
      title: 'SUILAFT Full',
      description: 'Solución integral de compliance y prevención de lavado de activos con monitoreo continuo.',
      benefit: 'Cumplimiento total'
    },
    {
      icon: BarChart3,
      title: 'SUILAFT Risk',
      description: 'Sistema especializado en gestión y análisis de riesgos financieros y operacionales.',
      benefit: 'Gestión de riesgos'
    },
    {
      icon: FileCheck,
      title: 'SUILAFT Debidas Diligencias',
      description: 'Validación exhaustiva y análisis de contrapartes con IA para toma de decisiones.',
      benefit: 'Validación inteligente'
    },
    {
      icon: GraduationCap,
      title: 'ERP Institutos Superiores',
      description: 'Gestión académica y administrativa completa para instituciones educativas.',
      benefit: 'Educación eficiente'
    },
    {
      icon: Building2,
      title: 'ERP Capacitaciones',
      description: 'Control total de cursos, alumnos, procesos y certificaciones en un solo lugar.',
      benefit: 'Gestión integral'
    },
    {
      icon: Factory,
      title: 'ERP Cacaotera',
      description: 'Control operativo y administrativo especializado para el sector cacaotero.',
      benefit: 'Sector específico'
    },
    {
      icon: Receipt,
      title: 'ZUIPAY Facturación',
      description: 'Emisión y gestión de comprobantes electrónicos con cumplimiento fiscal total.',
      benefit: 'Facturación legal'
    },
    {
      icon: Database,
      title: 'Sistema Contable',
      description: 'Control contable y financiero completo con reportes en tiempo real.',
      benefit: 'Control financiero'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-[#101A33]/50 to-[#0A1020]" />
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#00AEEF]/5 rounded-full blur-[120px]"
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#1E4ED8]/5 rounded-full blur-[100px]"
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00AEEF]/5 rounded-full blur-[120px]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-8"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              <span className="text-[#00AEEF] text-sm font-medium">Respaldado por Grupo Consulteg</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAF2FF] mb-6 leading-tight"
              variants={itemVariants}
            >
              Soluciones{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                Tecnológicas
              </span>
              <br />
              que Transforman
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-[#AFC3E0] mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Desarrollo de software a medida, ERPs personalizados, soluciones con Inteligencia Artificial, 
              compliance y automatización para empresas que buscan innovar.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              variants={itemVariants}
            >
              <Link to="/contacto">
                <Button variant="primary" size="lg" className="group">
                  Cotizar ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="secondary" size="lg">
                  Ver demo
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#223252]"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <div className="text-3xl md:text-4xl font-bold text-[#00AEEF] mb-1">
                    <AnimatedCounter 
                      end={stat.label} 
                      duration={2500}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm text-[#AFC3E0]">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] to-[#101A33]/30" />
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Soluciones Destacadas
            </h2>
            <p className="text-xl text-[#AFC3E0] max-w-2xl mx-auto">
              Software empresarial especializado para cada necesidad de tu organización
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {products.map((product, index) => (
              <motion.div key={index} variants={itemVariants}>
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

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link to="/soluciones">
              <Button variant="secondary" size="lg">
                Ver todas las soluciones
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why MySoft Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4" variants={itemVariants}>
              ¿Por qué MySoft?
            </motion.h2>
            <motion.p className="text-xl text-[#AFC3E0] max-w-2xl mx-auto" variants={itemVariants}>
              Más que tecnología, somos tu socio estratégico en transformación digital
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI & Technology Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/10 via-transparent to-[#1E4ED8]/10" />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/10 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#00AEEF]/20 rounded-3xl p-12 md:p-16" variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={containerVariants}>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6"
                  variants={itemVariants}
                >
                  <Brain className="w-4 h-4 text-[#00AEEF]" />
                  <span className="text-[#00AEEF] text-sm font-medium">Inteligencia Artificial</span>
                </motion.div>

                <motion.h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6" variants={itemVariants}>
                  Potenciado con{' '}
                  <span className="bg-gradient-to-r from-[#00AEEF] to-[#33C3FF] bg-clip-text text-transparent">
                    IA Avanzada
                  </span>
                </motion.h2>

                <motion.p className="text-lg text-[#AFC3E0] mb-8 leading-relaxed" variants={itemVariants}>
                  Integramos automatización e inteligencia artificial en cada solución para optimizar 
                  procesos, predecir tendencias y tomar decisiones basadas en datos en tiempo real.
                </motion.p>

                <motion.ul className="space-y-4 mb-8" variants={containerVariants}>
                  {[
                    'Análisis predictivo de riesgos y oportunidades',
                    'Automatización de procesos repetitivos',
                    'Detección de anomalías en tiempo real',
                    'Insights accionables con machine learning'
                  ].map((item, index) => (
                    <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}>
                      <CheckCircle2 className="w-6 h-6 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EAF2FF]">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={itemVariants}>
                  <Link to="/contacto">
                    <Button variant="primary" size="lg">
                      Descubrir más
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <div className="relative bg-[#0A1020]/50 border border-[#223252] rounded-2xl p-8 backdrop-blur-sm">
                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-[#AFC3E0] text-sm">Eficiencia operativa</span>
                      <span className="text-[#00AEEF] font-semibold">+87%</span>
                    </motion.div>
                    <div className="h-2 bg-[#223252] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#00AEEF] to-[#33C3FF] rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '87%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                      />
                    </div>

                    <motion.div 
                      className="flex items-center justify-between mt-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-[#AFC3E0] text-sm">Reducción de errores</span>
                      <span className="text-[#00AEEF] font-semibold">-92%</span>
                    </motion.div>
                    <div className="h-2 bg-[#223252] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#1E4ED8] to-[#00AEEF] rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>

                    <motion.div 
                      className="flex items-center justify-between mt-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-[#AFC3E0] text-sm">Tiempo ahorrado</span>
                      <span className="text-[#00AEEF] font-semibold">+65%</span>
                    </motion.div>
                    <div className="h-2 bg-[#223252] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1 }}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#223252]">
                      {[
                        { value: '24/7', label: 'Monitoreo' },
                        { value: '99.9%', label: 'Uptime' },
                        { value: '100%', label: 'Seguro' }
                      ].map((stat, idx) => (
                        <motion.div 
                          key={idx}
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                        >
                          <div className="text-2xl font-bold text-[#00AEEF] mb-1">{stat.value}</div>
                          <div className="text-xs text-[#AFC3E0]">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00AEEF]/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1E4ED8]/20 rounded-full blur-2xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
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

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Empresas que impulsan su crecimiento
              <br />
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                con nosotros
              </span>
            </h2>
            <p className="text-xl text-[#AFC3E0] max-w-2xl mx-auto">
              Negocios de todo el país confían en nosotros
            </p>
          </motion.div>

          {/* Horizontal Scroll Clients */}
          <motion.div 
            className="relative mb-16"
            variants={itemVariants}
          >
            {/* Scroll Container */}
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background with ADD8E6 */}
              <div className="absolute inset-0 bg-[#ADD8E6]/10 backdrop-blur-sm" />
              
              {/* Gradient Overlays for smooth scroll effect */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A1020] to-transparent z-10" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A1020] to-transparent z-10" />

              {/* Scrollable Content - Auto-scroll */}
              <div className="overflow-hidden">
                <motion.div 
                  className="flex gap-8 p-12"
                  animate={{ x: [-1000, -5200] }}
                  transition={{ 
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* First set of clients */}
                  {clients.map((client) => (
                    <motion.div
                      key={`first-${client.id}`}
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="relative w-48 h-48 flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: client.id * 0.1 }}
                      >
                        {/* Card with ADD8E6 background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ADD8E6]/20 to-[#ADD8E6]/5 border-2 border-[#ADD8E6]/40 rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#ADD8E6]/70 transition-all duration-300" />
                        
                        {/* Inner glow */}
                        <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />

                        {/* Client Image */}
                        <motion.img
                          src={client.image}
                          alt={`Cliente ${client.id}`}
                          className="h-32 w-32 object-contain filter brightness-125 contrast-150 drop-shadow-lg relative z-10"
                          loading="lazy"
                          whileHover={{ 
                            filter: 'brightness(150%) contrast(175%) drop-shadow(0 0 20px rgba(173, 216, 230, 0.8))'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="text-center font-bold text-[#ADD8E6] text-3xl z-10">${client.id}</div>`;
                            }
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                  
                  {/* Duplicate set of clients for infinite loop */}
                  {clients.map((client) => (
                    <motion.div
                      key={`second-${client.id}`}
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="relative w-48 h-48 flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: client.id * 0.1 }}
                      >
                        {/* Card with ADD8E6 background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ADD8E6]/20 to-[#ADD8E6]/5 border-2 border-[#ADD8E6]/40 rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#ADD8E6]/70 transition-all duration-300" />
                        
                        {/* Inner glow */}
                        <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />

                        {/* Client Image */}
                        <motion.img
                          src={client.image}
                          alt={`Cliente ${client.id}`}
                          className="h-32 w-32 object-contain filter brightness-125 contrast-150 drop-shadow-lg relative z-10"
                          loading="lazy"
                          whileHover={{ 
                            filter: 'brightness(150%) contrast(175%) drop-shadow(0 0 20px rgba(173, 216, 230, 0.8))'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="text-center font-bold text-[#ADD8E6] text-3xl z-10">${client.id}</div>`;
                            }
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              className="text-center mt-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-[#AFC3E0] text-sm">⏸ Desplazamiento automático infinito</p>
            </motion.div>
          </motion.div>

          {/* Trust Statement */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center justify-center gap-8 px-8 py-6 bg-gradient-to-r from-[#ADD8E6]/15 to-[#00AEEF]/15 border border-[#ADD8E6]/40 rounded-2xl">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#ADD8E6] mb-2">11+</p>
                <p className="text-[#AFC3E0]">Empresas confían</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#ADD8E6]/30 to-transparent" />
              <div>
                <p className="text-lg font-semibold text-[#EAF2FF] mb-1">Transformación Digital</p>
                <p className="text-[#AFC3E0]">Para todos los sectores</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-[#ADD8E6]/40 to-[#ADD8E6]/25 border-2 border-[#ADD8E6]/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden backdrop-blur-sm shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <motion.div 
              className="relative z-10"
              variants={containerVariants}
            >
              <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6" variants={itemVariants}>
                ¿Listo para Transformar tu Empresa?
              </motion.h2>
              <motion.p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto" variants={itemVariants}>
                Agenda una demo personalizada o solicita una cotización sin compromiso. 
                Nuestros expertos están listos para ayudarte.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={itemVariants}
              >
                <Link to="/contacto">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-[#0A1020] hover:bg-white/90 border-white font-semibold"
                  >
                    Agendar demo
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="bg-white/20 text-white hover:bg-white/40 backdrop-blur-sm border border-white/60 font-semibold"
                  >
                    Solicitar cotización
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}