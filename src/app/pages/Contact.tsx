import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Send, MessageSquare, Clock,
  CheckCircle, Users, Zap, ChevronDown, ChevronUp,
  Linkedin, Twitter, Instagram, Globe, HeadphonesIcon, Calendar
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 22 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 22 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 22 } }
};

const services = [
  'SUILAFT Full', 'SUILAFT Risk', 'SUILAFT Debidas Diligencias',
  'ERP para Institutos Superiores', 'ERP para Capacitaciones',
  'ERP para Cacaotera', 'ZUIPAY Facturación Electrónica',
  'Sistema Contable', 'Desarrollo a Medida', 'Consultoría Tecnológica', 'Otro'
];

const stats = [
  { icon: Clock, label: 'Tiempo de respuesta', value: 2, suffix: 'h', color: '#00AEEF', isCounter: true },
  { icon: Users, label: 'Clientes satisfechos', value: 150, suffix: '+', color: '#1E4ED8', isCounter: true },
  { icon: CheckCircle, label: 'Satisfacción', value: 98, suffix: '%', color: '#10B981', isCounter: true },
  { icon: Zap, label: 'Soporte técnico', value: 24, suffix: '/7', color: '#F59E0B', isCounter: true },
];

const faqs = [
  { question: '¿Cuánto tiempo tarda en implementarse una solución?', answer: 'Depende del alcance del proyecto. Soluciones estándar como ZUIPAY pueden estar activas en 1-2 semanas. Proyectos a medida o ERP completos suelen tomar entre 4 y 12 semanas con metodología ágil.' },
  { question: '¿Ofrecen demos gratuitas de sus productos?', answer: 'Sí, ofrecemos demos personalizadas sin compromiso para todos nuestros productos. Solo completa el formulario seleccionando el servicio de interés y agendaremos una sesión con nuestros especialistas.' },
  { question: '¿Qué tipo de soporte técnico brindan?', answer: 'Contamos con soporte técnico 24/7 por canales de mensajería, correo y teléfono. Nuestros planes incluyen actualizaciones, mantenimiento preventivo y asistencia en línea en tiempo real.' },
  { question: '¿Tienen presencia en toda Latinoamérica?', answer: 'Sí, operamos de forma remota en toda la región y contamos con clientes en Ecuador, Perú, Colombia y México. Podemos adaptarnos a la legislación fiscal y normativa de cada país.' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: Twitter, label: 'Twitter / X', href: '#', color: '#1DA1F2' },
  { icon: Instagram, label: 'Instagram', href: '#', color: '#E1306C' },
  { icon: Globe, label: 'Web', href: '#', color: '#00AEEF' },
];

const reasons = [
  { icon: HeadphonesIcon, title: 'Atención personalizada', desc: 'Un ejecutivo dedicado te acompaña desde el primer contacto hasta la implementación.', color: '#00AEEF' },
  { icon: Zap, title: 'Respuesta rápida', desc: 'Respondemos en menos de 2 horas en días hábiles. Tu tiempo es valioso.', color: '#1E4ED8' },
  { icon: Calendar, title: 'Demo sin compromiso', desc: 'Agenda una demostración gratuita y conoce cómo nuestra solución se adapta a ti.', color: '#10B981' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const filledFields = Object.values(formData).filter(Boolean).length;
  const totalFields = Object.keys(formData).length;
  const progress = Math.round((filledFields / totalFields) * 100);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-[#101A33]/40 to-[#0A1020]" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00AEEF]/8 rounded-full blur-[140px]"
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#1E4ED8]/10 rounded-full blur-[80px]"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-[#00AEEF]/6 rounded-full blur-[80px]"
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
          {/* Floating dots */}
          <motion.div className="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-[#00AEEF]/50" animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.div className="absolute top-48 right-1/3 w-1.5 h-1.5 rounded-full bg-[#1E4ED8]/70" animate={{ y: [0, 10, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
          <motion.div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 rounded-full bg-[#00AEEF]/35" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6">
              <motion.span
                className="w-2 h-2 rounded-full bg-[#00AEEF]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-[#00AEEF] text-sm font-medium">Estamos disponibles ahora</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#EAF2FF] mb-6 leading-tight"
            >
              Hablemos de tu{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] via-[#7CD7FF] to-[#1E4ED8] bg-clip-text text-transparent">
                Proyecto
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-[#AFC3E0] mb-10 leading-relaxed">
              Transformamos tus ideas en soluciones tecnológicas reales.{' '}
              Agenda una demo o solicita una cotización sin compromiso.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {['Demo gratuita', 'Cotización', 'Soporte técnico', 'Consultoría'].map((chip, i) => (
                <motion.span
                  key={chip}
                  className="px-4 py-1.5 bg-[#101A33] border border-[#223252] rounded-full text-sm text-[#AFC3E0] hover:border-[#00AEEF]/50 hover:text-[#00AEEF] transition-all cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-y border-[#223252] bg-[#0D1526]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map(({ icon: Icon, label, value, suffix, color }) => (
              <motion.div key={label} className="flex items-center gap-4" variants={fadeUp}>
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </motion.div>
                <div>
                  <p className="text-2xl font-bold text-[#EAF2FF]">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </p>
                  <p className="text-xs text-[#AFC3E0]">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why contact us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasons.map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="group relative bg-[#101A33] border border-[#223252] rounded-2xl p-6 hover:border-[#00AEEF]/30 transition-all duration-300 h-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `radial-gradient(circle at top left, ${color}10, transparent 60%)` }}
                  />
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}15` }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </motion.div>
                  <h3 className="text-[#EAF2FF] font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-[#AFC3E0] text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#EAF2FF] mb-6">Información de Contacto</h2>
                <div className="space-y-5">
                  {[
                    { icon: Mail, title: 'Email', lines: [{ text: 'info@mysoft.com', href: 'mailto:info@mysoft.com' }, { text: 'ventas@mysoft.com', href: 'mailto:ventas@mysoft.com' }] },
                    { icon: Phone, title: 'Teléfono', lines: [{ text: '+1 (234) 567-890', href: 'tel:+1234567890' }, { text: '+1 (234) 567-891', href: 'tel:+1234567891' }] },
                    { icon: MapPin, title: 'Ubicación', lines: [{ text: 'Av. Principal 123, Edificio Corporativo, Ciudad, País', href: null }] },
                  ].map(({ icon: Icon, title, lines }, i) => (
                    <motion.div
                      key={title}
                      className="group flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
                    >
                      <motion.div
                        className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 group-hover:bg-[#00AEEF]/20 flex items-center justify-center flex-shrink-0 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="w-5 h-5 text-[#00AEEF]" />
                      </motion.div>
                      <div>
                        <h3 className="text-[#EAF2FF] font-semibold mb-1 text-sm">{title}</h3>
                        {lines.map(({ text, href }) =>
                          href ? (
                            <a key={text} href={href} className="block text-[#AFC3E0] hover:text-[#00AEEF] transition-colors text-sm">{text}</a>
                          ) : (
                            <p key={text} className="text-[#AFC3E0] text-sm">{text}</p>
                          )
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#223252]">
                  <h3 className="text-[#EAF2FF] font-semibold mb-3 text-sm">Horario de Atención</h3>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm"><span className="text-[#AFC3E0]">Lunes – Viernes</span><span className="text-[#EAF2FF] font-medium">8:00 – 18:00</span></div>
                    <div className="flex justify-between text-sm"><span className="text-[#AFC3E0]">Sábados</span><span className="text-[#EAF2FF] font-medium">9:00 – 13:00</span></div>
                    <div className="flex justify-between text-sm mt-2"><span className="text-[#AFC3E0]">Soporte técnico</span><span className="text-[#10B981] font-semibold">24 / 7</span></div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#223252]">
                  <h3 className="text-[#EAF2FF] font-semibold mb-3 text-sm">Síguenos</h3>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, label, href, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        title={label}
                        className="w-10 h-10 rounded-xl bg-[#0A1020] border border-[#223252] flex items-center justify-center transition-all duration-200"
                        whileHover={{ scale: 1.15, y: -3, borderColor: color }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Icon className="w-4 h-4" style={{ color }} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold py-4 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(37,211,102,0.35)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="absolute inset-0 bg-[#20BA5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-white absolute -left-4"
                    animate={{ scale: [1, 1.6, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <MessageSquare className="w-5 h-5" />
                  Chatear por WhatsApp
                </span>
              </motion.a>

              {/* Response badge */}
              <motion.div
                className="bg-[#0A1020] border border-[#223252] rounded-xl p-4 flex items-center gap-3"
                whileHover={{ borderColor: 'rgba(16,185,129,0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#10B981]/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-[#EAF2FF] text-sm font-semibold">Respuesta garantizada</p>
                  <p className="text-[#AFC3E0] text-xs">Te contactamos en menos de 2 horas hábiles</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-8 md:p-10">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-3xl font-bold text-[#EAF2FF]">Solicita una Cotización</h2>
                    <p className="text-[#AFC3E0] mt-1 text-sm">Completa el formulario y te contactamos a la brevedad.</p>
                  </div>
                  {!isSubmitted && (
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xs text-[#AFC3E0] mb-1">{progress}% completado</p>
                      <div className="w-24 h-1.5 bg-[#223252] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] rounded-full"
                          animate={{ width: `${progress}%` }}
                          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="my-6 border-t border-[#223252]" />

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      className="bg-gradient-to-br from-[#00AEEF]/10 to-[#1E4ED8]/10 border border-[#00AEEF]/20 rounded-2xl p-10 text-center"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mx-auto mb-5 ring-4 ring-[#00AEEF]/10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      >
                        <CheckCircle className="w-10 h-10 text-[#00AEEF]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#EAF2FF] mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-[#AFC3E0]">Gracias por contactarnos. Nuestro equipo revisará tu solicitud y se comunicará contigo pronto.</p>
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full">
                        <Clock className="w-4 h-4 text-[#10B981]" />
                        <span className="text-[#10B981] text-sm font-medium">Respuesta en menos de 2 horas</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input label="Nombre completo *" name="name" type="text" placeholder="Juan Pérez" value={formData.name} onChange={handleChange} required />
                        <Input label="Empresa *" name="company" type="text" placeholder="Mi Empresa S.A." value={formData.company} onChange={handleChange} required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input label="Correo electrónico *" name="email" type="email" placeholder="juan@empresa.com" value={formData.email} onChange={handleChange} required />
                        <Input label="Teléfono *" name="phone" type="tel" placeholder="+1 234 567 890" value={formData.phone} onChange={handleChange} required />
                      </div>
                      <div>
                        <label className="block text-[#AFC3E0] mb-2 text-sm font-medium">Servicio de interés *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#0A1020] border border-[#223252] rounded-xl text-[#EAF2FF] focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Selecciona un servicio</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <Textarea
                        label="Mensaje"
                        name="message"
                        placeholder="Cuéntanos sobre tu proyecto, necesidades o preguntas..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      />
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button type="submit" variant="primary" size="lg" className="w-full">
                          <Send className="w-5 h-5" />
                          Enviar solicitud
                        </Button>
                      </motion.div>
                      <p className="text-xs text-[#AFC3E0] text-center flex items-center justify-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                        Tus datos están protegidos. Nunca compartiremos tu información.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-[#223252]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E4ED8]/10 border border-[#1E4ED8]/20 rounded-full mb-4">
              <span className="text-[#1E4ED8] text-sm font-medium">Preguntas frecuentes</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#EAF2FF]">
              ¿Tienes dudas?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#AFC3E0] mt-3">
              Respuestas a las preguntas más comunes sobre nuestros servicios.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#101A33] border border-[#223252] rounded-xl overflow-hidden hover:border-[#00AEEF]/30 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[#EAF2FF] font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 ${openFaq === i ? 'text-[#00AEEF]' : 'text-[#AFC3E0]'}`} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-5 border-t border-[#223252]">
                        <p className="text-[#AFC3E0] pt-4 leading-relaxed text-sm">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative bg-gradient-to-br from-[#101A33] to-[#0D1526] border border-[#223252] rounded-3xl p-12 text-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00AEEF]/8 rounded-full blur-[80px]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#1E4ED8]/8 rounded-full blur-[80px]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
              >
                <Calendar className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-[#00AEEF] text-sm font-medium">Agenda sin costo</span>
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-[#EAF2FF] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                ¿Prefieres una reunión presencial?
              </motion.h2>
              <motion.p
                className="text-lg text-[#AFC3E0] mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Visita nuestras oficinas o agenda una videollamada con nuestros expertos.
                Estamos aquí para escucharte y entender tu proyecto.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="primary" size="lg">
                  <Calendar className="w-5 h-5" />
                  Agendar reunión
                </Button>
                <Button variant="secondary" size="lg">
                  <MapPin className="w-5 h-5" />
                  Ver mapa de ubicación
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
