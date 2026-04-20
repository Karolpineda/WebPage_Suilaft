import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Target,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Zap,
  CheckCircle2,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 22 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -52 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 22 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 52 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 22 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } }
};

const values = [
  { icon: Shield, title: 'Confianza', description: 'Construimos relaciones duraderas basadas en transparencia, honestidad y resultados comprobados.', color: '#00AEEF' },
  { icon: Lightbulb, title: 'Innovación', description: 'Adoptamos las últimas tecnologías para ofrecer soluciones vanguardistas y competitivas.', color: '#7C3AED' },
  { icon: Target, title: 'Excelencia', description: 'Cada proyecto es una oportunidad para superar expectativas con calidad superior.', color: '#1E4ED8' },
  { icon: Zap, title: 'Eficiencia', description: 'Optimizamos procesos para maximizar productividad y reducir costos operativos.', color: '#F59E0B' },
  { icon: Heart, title: 'Compromiso', description: 'Tu éxito es nuestro éxito. Nos involucramos de principio a fin en cada proyecto.', color: '#EF4444' },
  { icon: Users, title: 'Colaboración', description: 'Trabajamos en equipo contigo, entendiendo tus necesidades y co-creando soluciones.', color: '#10B981' },
];

const milestones = [
  { year: '2010', title: 'Fundación de Suilaft', description: 'Inicio de operaciones respaldados por Grupo Consulteg', icon: '🚀' },
  { year: '2014', title: 'Primera Suite SUILAFT', description: 'Lanzamiento de soluciones de compliance', icon: '🛡️' },
  { year: '2018', title: '100+ Clientes', description: 'Alcanzamos presencia en múltiples industrias', icon: '🏆' },
  { year: '2021', title: 'Integración de IA', description: 'Incorporamos inteligencia artificial en nuestras soluciones', icon: '🤖' },
  { year: '2025', title: 'Expansión Regional', description: 'Presencia consolidada en Latinoamérica', icon: '🌎' },
];

const stats = [
  { end: 15, suffix: '+', label: 'Años de experiencia' },
  { end: 100, suffix: '+', label: 'Clientes activos' },
  { end: 500, suffix: '+', label: 'Proyectos entregados' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-[#101A33]/30 to-[#0A1020]" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00AEEF]/8 rounded-full blur-[130px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1E4ED8]/8 rounded-full blur-[100px]"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[100px]"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6">
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00AEEF]"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#00AEEF] text-sm font-medium">Sobre Suilaft</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAF2FF] mb-6 leading-tight"
              variants={fadeUp}
            >
              15 Años{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] via-[#7CD7FF] to-[#1E4ED8] bg-clip-text text-transparent">
                Transformando
              </span>
              <br />
              Empresas
            </motion.h1>

            <motion.p className="text-xl text-[#AFC3E0] leading-relaxed" variants={fadeUp}>
              Somos el brazo tecnológico de Grupo Consulteg, especializados en desarrollo de
              software empresarial, compliance y soluciones con inteligencia artificial.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1E4ED8]/10 border border-[#1E4ED8]/20 rounded-full mb-6">
                <Calendar className="w-3.5 h-3.5 text-[#1E4ED8]" />
                <span className="text-[#1E4ED8] text-xs font-medium tracking-wide uppercase">Nuestra Historia</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6 leading-tight">
                Una década y media de{' '}
                <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">innovación</span>
              </h2>
              <div className="space-y-5 text-[#AFC3E0] leading-relaxed">
                <p>
                  Suilaft nació en 2010 como la división tecnológica de{' '}
                  <strong className="text-[#00AEEF]">Grupo Consulteg</strong>, con la misión de llevar
                  transformación digital a empresas que buscaban innovar y optimizar sus procesos operativos.
                </p>
                <p>
                  A lo largo de más de <strong className="text-[#00AEEF]">15 años</strong>, hemos desarrollado
                  soluciones especializadas en compliance, ERPs verticales, facturación electrónica y sistemas
                  contables, siempre adaptándonos a las necesidades únicas de cada industria.
                </p>
                <p>
                  Hoy, con la integración de <strong className="text-[#00AEEF]">Inteligencia Artificial</strong> y
                  automatización avanzada, seguimos siendo líderes en innovación tecnológica empresarial.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-6 mt-10"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, i) => (
                  <motion.div key={i} className="text-center" variants={fadeUp}>
                    <div className="text-4xl font-bold text-[#00AEEF] mb-1">
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-[#AFC3E0]">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#101A33] to-[#0D1526] border border-[#223252] rounded-2xl p-8 hover:border-[#00AEEF]/30 transition-colors duration-500"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#1E4ED8] flex items-center justify-center">
                    <span className="text-[#0A1020] font-bold text-lg">M</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#EAF2FF]">Respaldo de Grupo Consulteg</h3>
                </div>
                <p className="text-[#AFC3E0] mb-6 leading-relaxed">
                  Como parte de Grupo Consulteg, contamos con el respaldo de una organización consolidada
                  con presencia regional, expertise multidisciplinario y una red de profesionales especializados.
                </p>
                <ul className="space-y-3">
                  {[
                    'Solidez financiera y organizacional',
                    'Equipo multidisciplinario de expertos',
                    'Presencia en múltiples países',
                    'Experiencia en diversos sectores',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EAF2FF]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#00AEEF]/15 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1E4ED8]/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-[#101A33]/20 to-[#0A1020]" />
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[600px] bg-[#00AEEF]/4 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E4ED8]/10 border border-[#1E4ED8]/20 rounded-full mb-4">
              <span className="text-[#1E4ED8] text-sm font-medium">Trayectoria</span>
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4" variants={fadeUp}>
              Nuestra Trayectoria
            </motion.h2>
            <motion.p className="text-xl text-[#AFC3E0]" variants={fadeUp}>
              Hitos importantes en nuestro camino de innovación
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <motion.div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-[#00AEEF]/40 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ top: 0 }}
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 22, delay: 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      className="bg-[#101A33] border border-[#223252] rounded-xl p-6 group hover:border-[#00AEEF]/40 transition-all duration-300 inline-block w-full lg:max-w-sm"
                      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,174,239,0.12)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <div className="text-3xl mb-3">{milestone.icon}</div>
                      <div className="text-3xl font-bold text-[#00AEEF] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-[#EAF2FF] mb-2">{milestone.title}</h3>
                      <p className="text-[#AFC3E0] text-sm">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex flex-col items-center relative z-10">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#1E4ED8] border-4 border-[#0A1020] shadow-lg shadow-[#00AEEF]/40"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                    />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-4">
              <span className="text-[#00AEEF] text-sm font-medium">Valores corporativos</span>
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4" variants={fadeUp}>
              Nuestros Valores
            </motion.h2>
            <motion.p className="text-xl text-[#AFC3E0] max-w-2xl mx-auto" variants={fadeUp}>
              Principios que guían cada decisión y cada línea de código que escribimos
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="group relative bg-[#101A33]/60 border border-[#223252] rounded-xl p-6 h-full hover:border-[#00AEEF]/30 transition-colors duration-300 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top left, ${value.color}10, transparent 60%)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${value.color}18` }}
                  >
                    <value.icon className="w-6 h-6" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#EAF2FF] mb-2">{value.title}</h3>
                  <p className="text-[#AFC3E0] text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101A33]/30 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Misión y Visión
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 80, damping: 22 }}
              whileHover={{ y: -6 }}
            >
              <div className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#00AEEF]/20 rounded-2xl p-10 relative overflow-hidden h-full group hover:border-[#00AEEF]/40 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00AEEF]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00AEEF]/6 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#00AEEF]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-[#00AEEF]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#EAF2FF] mb-4">Misión</h3>
                  <p className="text-[#AFC3E0] leading-relaxed text-lg">
                    Transformar empresas mediante soluciones tecnológicas innovadoras, personalizadas
                    y de clase mundial, potenciando su eficiencia, seguridad y cumplimiento normativo
                    para que alcancen sus objetivos estratégicos.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 80, damping: 22, delay: 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#1E4ED8]/20 rounded-2xl p-10 relative overflow-hidden h-full group hover:border-[#1E4ED8]/40 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1E4ED8]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1E4ED8]/6 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#1E4ED8]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-[#1E4ED8]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#EAF2FF] mb-4">Visión</h3>
                  <p className="text-[#AFC3E0] leading-relaxed text-lg">
                    Ser el referente tecnológico de transformación digital en Latinoamérica, reconocidos
                    por nuestra excelencia en desarrollo de software empresarial, integración de IA y
                    capacidad de adaptación a las necesidades únicas de cada industria.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative bg-gradient-to-br from-[#101A33] to-[#0D1526] border border-[#223252] rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00AEEF]/8 rounded-full blur-[100px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#1E4ED8]/8 rounded-full blur-[80px]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.1 }}
              >
                ¿Quieres ser parte de{' '}
                <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                  nuestra historia?
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-[#AFC3E0] mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.2 }}
              >
                Únete a las empresas que confían en Suilaft para su transformación digital.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.3 }}
              >
                <Link to="/contacto">
                  <Button variant="primary" size="lg" className="group">
                    Hablemos de tu proyecto
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Button>
                </Link>
                <Link to="/soluciones">
                  <Button variant="secondary" size="lg">
                    Ver soluciones
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
