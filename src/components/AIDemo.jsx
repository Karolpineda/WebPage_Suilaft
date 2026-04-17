import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLightningBolt, HiCog, HiDatabase, HiMail, HiDocumentReport, HiChat } from 'react-icons/hi';

const workflowNodes = [
  { id: 'trigger', icon: HiLightningBolt, label: 'Trigger', desc: 'Nuevo lead recibido', x: 0, y: 50 },
  { id: 'ai', icon: HiChat, label: 'IA MySoft', desc: 'Analizar sentimiento', x: 25, y: 50 },
  { id: 'db', icon: HiDatabase, label: 'CRM', desc: 'Guardar en base', x: 50, y: 30 },
  { id: 'auto', icon: HiCog, label: 'n8n', desc: 'Clasificar prioridad', x: 50, y: 70 },
  { id: 'email', icon: HiMail, label: 'Email', desc: 'Respuesta automática', x: 75, y: 30 },
  { id: 'report', icon: HiDocumentReport, label: 'Reporte', desc: 'Dashboard en vivo', x: 75, y: 70 },
];

const connections = [
  { from: 'trigger', to: 'ai' },
  { from: 'ai', to: 'db' },
  { from: 'ai', to: 'auto' },
  { from: 'db', to: 'email' },
  { from: 'auto', to: 'report' },
];

const typingMessages = [
  { role: 'user', text: '¿Puedes analizar mis ventas del Q1?' },
  { role: 'ai', text: 'Claro. Tus ventas del Q1 crecieron un 23% respecto al trimestre anterior. Los productos con mayor rotación fueron ERP MySoft (+35%) y SUILAF (+18%). ¿Quieres un desglose por región?' },
  { role: 'user', text: 'Sí, y genera un reporte automático' },
  { role: 'ai', text: 'Listo. He generado el reporte y lo envié a tu correo. También programé un resumen semanal automático vía n8n. ¿Necesitas algo más?' },
];

function TypingEffect({ text, speed = 25, onComplete }) {
  const [displayed, setDisplayed] = useState('');
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="cursor-blink text-blue-light">|</span>}
    </span>
  );
}

function AIChat() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (currentIdx < typingMessages.length) {
      const delay = currentIdx === 0 ? 1000 : 800;
      const timer = setTimeout(() => {
        setIsTyping(true);
        setVisibleMessages((prev) => [...prev, { ...typingMessages[currentIdx], typing: true }]);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIdx]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const handleTypingComplete = () => {
    setIsTyping(false);
    setVisibleMessages((prev) =>
      prev.map((m, i) => (i === prev.length - 1 ? { ...m, typing: false } : m))
    );
    setCurrentIdx((prev) => prev + 1);
  };

  return (
    <div className="bg-surface rounded-2xl border border-gray-border/50 overflow-hidden">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-border/50 bg-surface-light/50">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-mid to-blue-light flex items-center justify-center">
          <HiChat className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Asistente IA MySoft</p>
          <p className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-dot" />
            En línea — conectado a tus datos
          </p>
        </div>
      </div>

      {/* Chat messages */}
      <div ref={chatRef} className="p-4 space-y-4 h-[280px] overflow-y-auto">
        {visibleMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-mid text-white rounded-br-md'
                  : 'bg-surface-light border border-gray-border/50 text-white/80 rounded-bl-md'
              }`}
            >
              {msg.typing ? (
                <TypingEffect text={msg.text} speed={msg.role === 'ai' ? 18 : 30} onComplete={handleTypingComplete} />
              ) : (
                msg.text
              )}
            </div>
          </motion.div>
        ))}
        {isTyping && visibleMessages.length > 0 && visibleMessages[visibleMessages.length - 1]?.role === 'user' && !visibleMessages[visibleMessages.length - 1]?.typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-surface-light border border-gray-border/50 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-blue-light/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-blue-light/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-blue-light/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function WorkflowDemo() {
  const [activeNode, setActiveNode] = useState(null);
  const [flowStep, setFlowStep] = useState(-1);

  useEffect(() => {
    const flow = () => {
      let step = 0;
      const interval = setInterval(() => {
        setFlowStep(step);
        setActiveNode(workflowNodes[step]?.id || null);
        step++;
        if (step > workflowNodes.length) {
          step = 0;
          setFlowStep(-1);
          setActiveNode(null);
        }
      }, 1200);
      return interval;
    };
    const interval = flow();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-surface rounded-2xl border border-gray-border/50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-mid to-blue-light flex items-center justify-center">
            <HiCog className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">Flujo de Automatización n8n</span>
        </div>
        <span className="text-[10px] text-green-400 flex items-center gap-1 bg-green-400/10 px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-dot" />
          Activo
        </span>
      </div>

      {/* Workflow nodes */}
      <div className="relative h-[200px]">
        {/* Connection lines SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map((conn, i) => {
            const from = workflowNodes.find((n) => n.id === conn.from);
            const to = workflowNodes.find((n) => n.id === conn.to);
            const isActive = flowStep >= workflowNodes.findIndex((n) => n.id === conn.from);
            return (
              <line
                key={i}
                x1={from.x + 5}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? '#4FA3D1' : '#1E3050'}
                strokeWidth="0.5"
                className={isActive ? 'data-flow-line' : ''}
                opacity={isActive ? 0.8 : 0.3}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {workflowNodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <motion.div
              key={node.id}
              className={`absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 ${isActive ? 'z-10' : 'z-0'}`}
              style={{ left: `${node.x + 5}%`, top: `${node.y}%` }}
              animate={isActive ? { scale: 1.15 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-mid to-blue-light node-glow'
                    : 'bg-surface-light border border-gray-border/50'
                }`}
              >
                <node.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/50'}`} />
              </div>
              <span className={`text-[10px] font-medium whitespace-nowrap ${isActive ? 'text-blue-light' : 'text-white/40'}`}>
                {node.label}
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[9px] text-white/60 whitespace-nowrap bg-surface-light/80 px-2 py-0.5 rounded-full border border-blue-light/20"
                >
                  {node.desc}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: 'Ejecuciones hoy', value: '1,247' },
          { label: 'Tiempo ahorrado', value: '18h' },
          { label: 'Precisión IA', value: '97.3%' },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-2 rounded-lg bg-surface-light/50">
            <p className="text-lg font-bold gradient-text">{stat.value}</p>
            <p className="text-[10px] text-white/35">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AIDemo() {
  return (
    <section className="py-24 md:py-32 bg-navy-deeper relative overflow-hidden mesh-gradient">
      <div className="glow-circle w-[500px] h-[500px] bg-blue-light/6 top-[20%] left-[-100px]" />
      <div className="glow-circle w-[400px] h-[400px] bg-blue-mid/5 bottom-[-100px] right-[-100px]" />

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
            Innovación en acción
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            IA y Automatización{' '}
            <span className="gradient-text">trabajando para ti</span>
          </h2>
          <p className="mt-4 text-white/50">
            Mira en tiempo real cómo nuestra inteligencia artificial y los flujos de n8n pueden
            transformar tus procesos empresariales.
          </p>
        </motion.div>

        {/* Demo grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <HiChat className="w-5 h-5 text-blue-light" />
              Asistente IA — Análisis de datos en vivo
            </h3>
            <AIChat />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <HiCog className="w-5 h-5 text-blue-light" />
              Flujo n8n — Automatización inteligente
            </h3>
            <WorkflowDemo />
          </motion.div>
        </div>

        {/* Bottom capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            'Procesamiento de lenguaje natural',
            'Análisis predictivo',
            'Reportes automáticos',
            'Integración con 400+ apps',
            'Flujos sin código',
          ].map((cap) => (
            <span
              key={cap}
              className="px-4 py-2 text-xs font-medium text-white/60 bg-surface border border-gray-border/40 rounded-full hover:border-blue-light/20 hover:text-blue-light transition-all duration-300"
            >
              {cap}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
