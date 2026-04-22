import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Smartphone, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoProps {
  title: string;
  videoUrl: string;
}

function PhoneVideo({ title, videoUrl }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };
    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);
    const onEnded = () => setIsPlaying(false);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Phone — smaller on mobile */}
      <div className="relative w-[180px] h-[368px] sm:w-[220px] sm:h-[450px] lg:w-[220px] lg:h-[450px] bg-[#0A1020] rounded-[2rem] border-[4px] border-[#223252] shadow-[0_0_30px_rgba(0,174,239,0.15)] overflow-hidden group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-[#223252] rounded-b-lg z-20" />

        <div className="absolute inset-0 z-10 cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover transform-gpu"
            loop
            playsInline
            muted={isMuted}
            preload="auto"
            style={{ backfaceVisibility: 'hidden' }}
          />

          {isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20">
              <div className="w-8 h-8 border-2 border-[#00AEEF] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!isPlaying && !isBuffering && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#00AEEF] text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                <Play className="w-5 h-5 fill-current ml-1" />
              </div>
            </div>
          )}

          {isPlaying && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/10">
              <div className="w-11 h-11 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center">
                <Pause className="w-4 h-4 fill-current" />
              </div>
            </div>
          )}

          <button
            onClick={toggleMute}
            title={isMuted ? 'Activar audio' : 'Silenciar'}
            className="absolute bottom-9 right-3 z-30 w-8 h-8 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-[#00AEEF] transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-1.5 bg-white/10">
          <div className="h-full bg-[#00AEEF] transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <p className="text-[#EAF2FF] text-sm font-semibold text-center tracking-wide">{title}</p>
    </div>
  );
}

export function ServiceVideos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const serviceVideos = [
    {
      title: 'Facturación Rápida',
      videoUrl: 'https://res.cloudinary.com/do4fma9pi/video/upload/f_auto,q_auto/zuipay-demo-1.mp4_nzapnr',
    },
    {
      title: 'Control de Negocio',
      videoUrl: 'https://res.cloudinary.com/do4fma9pi/video/upload/f_auto,q_auto/zuipay-demo-2.mp4_yqjh8f',
    },
  ];

  // Track active dot on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-wider">Demostración en vivo</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6 leading-tight">
              Lleva tu negocio <br />
              <span className="text-[#00AEEF]">en tu bolsillo</span>
            </h2>

            <p className="text-[#AFC3E0] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Descubre por qué ZUIPAY es la herramienta preferida por emprendedores.
              Gestión total, facturación instantánea y claridad financiera desde tu celular.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Facturación electrónica 24/7',
                'Reportes de ventas en tiempo real',
                'Control de inventario integrado',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#EAF2FF] justify-center lg:justify-start">
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#AFC3E0] text-sm italic opacity-70">
              Toca el celular para reproducir · Usa el ícono de volumen para activar audio
            </p>
          </motion.div>

          {/* Right: Videos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 flex flex-col items-center gap-4 w-full lg:w-auto"
          >
            {/* ── Mobile: horizontal swipe carousel ── */}
            <div className="lg:hidden w-full flex flex-col items-center gap-4">
              <div
                ref={scrollRef}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {serviceVideos.map((video, index) => (
                  <div key={index} className="w-full flex-shrink-0 snap-center flex justify-center">
                    <PhoneVideo {...video} />
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {serviceVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      scrollRef.current?.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: 'smooth' });
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i ? 'bg-[#00AEEF] w-5' : 'bg-[#223252]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── Desktop: both side by side ── */}
            <div className="hidden lg:flex items-end gap-10">
              {serviceVideos.map((video, index) => (
                <PhoneVideo key={index} {...video} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
    </section>
  );
}
