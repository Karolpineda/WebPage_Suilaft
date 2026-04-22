import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Smartphone, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

interface VideoProps {
  title: string;
  videoUrl: string;
  thumbnail: string;
}

function PhoneVideo({ title, videoUrl, thumbnail }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phone Mockup Compact */}
      <div className="relative w-[200px] h-[410px] md:w-[240px] md:h-[490px] bg-[#0A1020] rounded-[2rem] border-[4px] border-[#223252] shadow-2xl overflow-hidden group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#223252] rounded-b-lg z-20" />
        
        <div className="absolute inset-0 z-10 cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src={videoUrl}
            poster={thumbnail}
            className="w-full h-full object-cover transform-gpu"
            loop
            playsInline
            webkit-playsinline="true"
            muted={isMuted}
            preload="auto"
            style={{ backfaceVisibility: 'hidden' }}
          />
          
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#00AEEF] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current ml-1" />
              </div>
            </div>
          )}

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-3 z-30 w-8 h-8 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-[#00AEEF] transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <p className="text-[#EAF2FF] text-sm font-semibold text-center">{title}</p>
    </div>
  );
}

export function ServiceVideos() {
  const serviceVideos = [
    {
      title: 'Facturación Rápida',
      videoUrl: '/src/app/assets/videos/zuipay-demo-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Control de Negocio',
      videoUrl: '/src/app/assets/videos/zuipay-demo-2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: General Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-wider">Demostración en vivo</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-[#EAF2FF] mb-8 leading-tight">
              Lleva tu negocio <br />
              <span className="text-[#00AEEF]">en tu bolsillo</span>
            </h2>
            
            <p className="text-[#AFC3E0] text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Descubre por qué ZUIPAY es la herramienta preferida por emprendedores. 
              Gestión total, facturación instantánea y claridad financiera desde tu celular.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Facturación electrónica 24/7',
                'Reportes de ventas en tiempo real',
                'Control de inventario integrado'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#EAF2FF] justify-center lg:justify-start">
                  <ArrowRight className="w-4 h-4 text-[#00AEEF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Videos Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex items-center gap-6 md:gap-12"
          >
            {serviceVideos.map((video, index) => (
              <PhoneVideo key={index} {...video} />
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
