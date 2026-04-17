import { motion } from 'framer-motion';
import { HiLightningBolt, HiShieldCheck, HiUserGroup, HiChip } from 'react-icons/hi';

const milestones = [
  { year: '2022', text: 'Fundación como parte de Grupo ConsulTeg' },
  { year: '2023', text: 'Primeros sistemas empresariales desplegados' },
  { year: '2024', text: 'Integración de IA y automatización' },
  { year: '2025', text: 'Expansión de plataformas cloud' },
  { year: '2026', text: 'Consolidación y liderazgo tecnológico' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-navy-deeper relative overflow-hidden mesh-gradient">
      <div className="glow-circle w-[400px] h-[400px] bg-blue-mid/6 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative pl-8 border-l-2 border-blue-light/20 space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year} custom={i} variants={fadeInUp} className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-light to-blue-neon border-4 border-navy-deeper shadow-md shadow-blue-light/20" />
                  <span className="text-xs font-bold text-blue-light bg-blue-light/10 border border-blue-light/20 px-2 py-0.5 rounded-full">
                    {m.year}
                  </span>
                  <p className="mt-1 text-sm text-white/50">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-blue-light uppercase tracking-wider"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-white"
            >
              <span className="gradient-text">4 años</span> transformando empresas con tecnología
            </motion.h2>

            <motion.p variants={fadeInUp} custom={2} className="mt-6 text-white/50 leading-relaxed">
              <strong className="text-white/80">My Soft</strong>, parte de{' '}
              <strong className="text-white/80">Grupo ConsulTeg</strong>, nació con la visión de
              democratizar el acceso a software empresarial de alta calidad. Nos especializamos en
              desarrollo a medida, automatización inteligente e integración de inteligencia artificial
              para impulsar la eficiencia operativa de nuestros clientes.
            </motion.p>

            <motion.p variants={fadeInUp} custom={3} className="mt-4 text-white/50 leading-relaxed">
              Nuestro equipo combina experiencia técnica con comprensión profunda de los procesos de
              negocio, lo que nos permite entregar soluciones que realmente generan impacto.
            </motion.p>

            {/* Values grid */}
            <motion.div
              variants={fadeInUp}
              custom={4}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { icon: HiLightningBolt, text: 'Agilidad', color: 'text-yellow-400' },
                { icon: HiShieldCheck, text: 'Confianza', color: 'text-green-400' },
                { icon: HiUserGroup, text: 'Equipo experto', color: 'text-blue-light' },
                { icon: HiChip, text: 'Innovación', color: 'text-purple-400' },
              ].map((v) => (
                <div
                  key={v.text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface/80 border border-gray-border/50 hover:border-blue-light/20 hover:bg-surface-light transition-all duration-300"
                >
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                  <span className="text-sm font-medium text-white/80">{v.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
