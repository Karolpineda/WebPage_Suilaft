import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 140;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      particles.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.00008;
          p.vy += dy * 0.00008;
        }

        // Speed damping
        p.vx *= 0.999;
        p.vy *= 0.999;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91, 192, 255, ${p.opacity * 0.6})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 163, 209, ${p.opacity * 0.08})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = 0.12 * (1 - dist / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 163, 209, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 z-0 pointer-events-none" />;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-deeper noise-overlay"
    >
      {/* Radial glow decorations */}
      <div className="glow-circle w-[600px] h-[600px] bg-blue-mid/15 top-[-200px] left-[-200px]" />
      <div className="glow-circle w-[500px] h-[500px] bg-blue-light/10 bottom-[-150px] right-[-150px]" />
      <div className="glow-circle w-[300px] h-[300px] bg-blue-neon/5 top-[50%] left-[60%]" />

      {/* Particle canvas */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-light bg-blue-light/10 border border-blue-light/20 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-neon rounded-full pulse-dot" />
                Grupo ConsulTeg · 4 años innovando
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              Soluciones{' '}
              <span className="gradient-text">empresariales</span>{' '}
              <br className="hidden sm:block" />
              a tu medida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed"
            >
              Desarrollamos sistemas, automatizamos procesos y potenciamos tu
              negocio con inteligencia artificial y tecnología de vanguardia.{' '}
              <strong className="text-blue-light">Tu visión, nuestra tecnología</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-mid to-blue-light rounded-full glow-btn hover:-translate-y-0.5 transition-all duration-300"
              >
                Solicitar Demo
                <HiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/70 border border-white/15 rounded-full hover:bg-white/5 hover:border-white/30 hover:text-white transition-all duration-300"
              >
                <HiPlay className="w-4 h-4" />
                Ver Servicios
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-12 flex gap-8 flex-wrap"
            >
              {[
                { value: '4+', label: 'Años' },
                { value: '50+', label: 'Proyectos' },
                { value: '99%', label: 'Satisfacción' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-sm text-white/40">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual right side — abstract dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-blue-light/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs text-white/30 font-mono">dashboard.mysoft.ec</span>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-gradient-to-r from-blue-light/15 to-blue-mid/10 rounded-lg" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-gradient-to-br from-blue-mid/15 to-blue-light/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-light/40 text-xs font-mono">API</span>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-blue-light/10 to-blue-neon/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-light/40 text-xs font-mono">DB</span>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-blue-neon/10 to-blue-mid/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-light/40 text-xs font-mono">AI</span>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-navy-darker to-navy/50 rounded-lg p-3">
                    <div className="flex gap-1 h-full items-end">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-blue-mid/60 to-blue-light/40 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gradient-to-br from-blue-light/8 to-blue-mid/8 rounded-lg" />
                    <div className="h-16 bg-gradient-to-br from-blue-mid/8 to-blue-neon/8 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass-card rounded-xl p-3 shadow-lg shadow-blue-light/5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-400/15 flex items-center justify-center">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Proceso automatizado</p>
                    <p className="text-[10px] text-white/40">Hace 2 min</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 glass-card rounded-xl p-3 shadow-lg shadow-blue-light/5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-light/15 flex items-center justify-center">
                    <span className="text-blue-light text-xs">📊</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">+28% eficiencia</p>
                    <p className="text-[10px] text-white/40">Este mes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-darker to-transparent z-10 pointer-events-none" />
    </section>
  );
}
