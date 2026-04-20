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

      {/* IA & Automation Section */}
      <section className="py-24 relative overflow-hidden bg-[#0A1020]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E4ED8]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#00AEEF] text-sm font-semibold tracking-wider uppercase mb-4 block"
            >
              Innovación en Acción
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              IA y Automatización trabajando <span className="text-[#AFC3E0]">para ti</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#AFC3E0] max-w-3xl mx-auto"
            >
              Mira en tiempo real cómo nuestra inteligencia artificial y los flujos de n8n pueden transformar tus procesos empresariales.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Assistant Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-[#EAF2FF] mb-4">
                <div className="p-2 bg-[#00AEEF]/10 rounded-lg">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold">Asistente IA — Análisis de datos en vivo</h3>
              </div>
              
              <div className="bg-[#101A33] border border-[#223252] rounded-2xl overflow-hidden shadow-2xl">
                {/* Chat Header */}
                <div className="bg-[#101A33] border-b border-[#223252] p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00AEEF] flex items-center justify-center text-white font-bold">
                    <span className="text-xs">🤖</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Asistente IA MySoft</h4>
                    <span className="text-xs text-[#10B981] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></span>
                      En línea — conectado a tus datos
                    </span>
                  </div>
                </div>
                
                {/* Chat Body */}
                <div className="p-6 space-y-4 h-[350px] overflow-y-auto">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-3"
                  >
                    <div className="flex-1 bg-[#1E293B] rounded-2xl p-4 border border-[#334155]">
                      <p className="text-[#E2E8F0] text-sm leading-relaxed">
                        Claro. Tus ventas del Q1 crecieron un 23% respecto al trimestre anterior. Los productos con mayor rotación fueron ERP MySoft (+35%) y SUILAF (+18%). ¿Quieres un desglose por región?
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-end gap-3"
                  >
                    <div className="bg-[#1E4ED8] text-white rounded-2xl p-4 shadow-lg max-w-[80%]">
                      <p className="text-sm font-medium">Sí, y genera un reporte automático</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex gap-3"
                  >
                    <div className="flex-1 bg-[#1E293B] rounded-2xl p-4 border border-[#334155]">
                      <p className="text-[#E2E8F0] text-sm leading-relaxed">
                        Listo. He generado el reporte y lo envié a tu correo. También programé un resumen semanal automático vía n8n. ¿Necesitas algo más?
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* n8n Workflow Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-[#EAF2FF] mb-4">
                <div className="p-2 bg-[#7C3AED]/10 rounded-lg">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold">Flujo n8n — Automatización inteligente</h3>
              </div>

              <div className="bg-[#0F172A] border border-[#223252] rounded-2xl p-8 relative overflow-hidden shadow-2xl h-[445px]">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                    <span className="text-xs font-semibold text-[#10B981]">Activo</span>
                  </div>
                  <div className="px-3 py-1 bg-[#223252] rounded-full text-[10px] text-white/60">Flujo de Automatización n8n</div>
                </div>

                {/* Workflow Visualization with real animations */}
                <div className="relative h-40 flex items-center justify-center">
                  <div className="relative flex items-center justify-center gap-6">
                    {/* Trigger */}
                    <div className="flex flex-col items-center gap-2 relative">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-14 h-14 bg-[#00AEEF]/20 rounded-xl border border-[#00AEEF]/40 flex items-center justify-center relative z-10"
                      >
                        <span className="text-2xl">⚡</span>
                      </motion.div>
                      <span className="text-[10px] text-[#AFC3E0]">Trigger</span>
                      
                      {/* Floating label for new lead */}
                      <motion.div 
                        animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#223252] border border-[#334155] rounded px-2 py-0.5 whitespace-nowrap"
                      >
                        <span className="text-[8px] text-white">Nuevo lead recibido</span>
                      </motion.div>
                    </div>

                    {/* Animated Line 1 */}
                    <div className="w-12 h-0.5 bg-[#223252] relative">
                      <motion.div 
                        animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute top-0 w-4 h-full bg-[#00AEEF] blur-[2px]"
                      />
                    </div>

                    {/* IA Center Node */}
                    <div className="flex flex-col items-center gap-2 relative">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-16 h-16 bg-[#7C3AED]/20 rounded-xl border border-[#7C3AED]/40 flex items-center justify-center relative z-10"
                      >
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed border-[#7C3AED]/30 rounded-xl"
                        />
                        <span className="text-3xl">🧠</span>
                      </motion.div>
                      <span className="text-[10px] text-white font-medium">IA MySoft</span>
                      
                      {/* Processing label */}
                      <motion.div 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#7C3AED]/30 border border-[#7C3AED]/50 rounded px-2 py-0.5 whitespace-nowrap"
                      >
                        <span className="text-[8px] text-white">Analizando sentimiento</span>
                      </motion.div>
                    </div>

                    {/* Flow Splitter */}
                    <div className="relative w-8 h-20 -mr-4">
                       <svg className="absolute inset-0 w-full h-full overflow-visible">
                          <motion.path 
                            d="M0,40 C10,40 20,40 30,10" 
                            stroke="#334155" strokeWidth="2" fill="none"
                            animate={{ stroke: ["#334155", "#00AEEF", "#334155"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.path 
                            d="M0,40 C10,40 20,40 30,70" 
                            stroke="#334155" strokeWidth="2" fill="none"
                            animate={{ stroke: ["#334155", "#7C3AED", "#334155"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          />
                       </svg>
                    </div>

                    {/* End Nodes */}
                    <div className="flex flex-col gap-6">
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-[#1E293B] rounded-lg border border-[#334155] flex items-center justify-center relative">
                          <span className="text-xl">📁</span>
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                            className="absolute -top-6 left-full ml-1 bg-[#10B981]/20 border border-[#10B981]/30 rounded px-1.5 py-0.5 whitespace-nowrap"
                          >
                            <span className="text-[8px] text-[#10B981]">Guardar en base</span>
                          </motion.div>
                        </div>
                        <span className="text-[10px] text-[#AFC3E0]">CRM</span>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-[#1E293B] rounded-lg border border-[#334155] flex items-center justify-center">
                          <span className="text-xl">📧</span>
                        </div>
                        <span className="text-[10px] text-[#AFC3E0]">Email</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Automation Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#223252] pt-8">
                  <div className="text-center">
                    <motion.div 
                      key="stat1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xl font-bold text-white leading-none"
                    >
                      1,247
                    </motion.div>
                    <div className="text-[10px] text-[#AFC3E0] mt-1">Ejecuciones hoy</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      key="stat2"
                      className="text-xl font-bold text-[#00AEEF] leading-none"
                    >
                      18h
                    </motion.div>
                    <div className="text-[10px] text-[#AFC3E0] mt-1">Tiempo ahorrado</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      key="stat3"
                      className="text-xl font-bold text-white leading-none"
                    >
                      97.3%
                    </motion.div>
                    <div className="text-[10px] text-[#AFC3E0] mt-1">Precisión IA</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
