import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isHidden, setIsHidden] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generar un enjambre de 250 partículas circulares
    const newParticles = Array.from({ length: 250 }).map((_, i) => {
      // Distribución circular desde afuera hacia el centro
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 60; // Distancia inicial (fuera de la pantalla)
      
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: Math.random() * 6 + 2, // Tamaños variados para dar profundidad
        delay: Math.random() * 1.5, // Entran en diferentes momentos
        duration: 1.5 + Math.random() * 1.5 // Duran entre 1.5s y 3s su viaje
      };
    });
    
    setParticles(newParticles);

    // Ocultar splash screen después de toda la animación (4.5 segundos)
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#001533] overflow-hidden" 
         style={{ animation: 'fadeOutSplash 0.6s ease-in-out 3.9s forwards' }}>
      
      {/* Filtro para crear el efecto "Gooey" / Fusión de partículas (cuando se juntan, parecen líquido o plasma) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ filter: 'url(#goo)' }}>
        
        {/* Flujo de partículas */}
        {particles.map(p => (
          <div 
            key={p.id}
            className="absolute bg-white rounded-full mix-blend-screen"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--tx': `${p.x}vw`,
              '--ty': `${p.y}vh`,
              boxShadow: '0 0 10px 2px rgba(255,255,255,0.4)',
              animation: `swarmIn ${p.duration}s cubic-bezier(0.25, 1, 0.5, 1) ${p.delay}s forwards`
            } as React.CSSProperties}
          />
        ))}

        {/* Resplandor central que aparece cuando impactan las partículas */}
        <div className="absolute w-[200px] h-[200px] bg-white rounded-full opacity-0 blur-2xl"
             style={{ animation: 'coreFlash 3s ease-out 2s forwards' }}></div>
      </div>

      {/* Contenedor del Logo y Texto que se "forja" desde el destello */}
      <div className="relative z-10 flex flex-col items-center justify-center opacity-0"
           style={{ animation: 'forgeLogo 2.5s cubic-bezier(0, 0.55, 0.45, 1) 2.5s forwards' }}>
        
        {/* Sello / Logo tipo Escudo (Refinado al de tu imagen) */}
        <div className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          <svg width="120" height="140" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lado izquierdo sólido del escudo */}
            <path d="M 50 115 C 20 95 10 55 10 15 C 25 15 35 10 50 2 V 115 Z" fill="white" />
            
            {/* Lado derecho líneas del documento */}
            <g stroke="white" strokeWidth="7" strokeLinecap="round">
              <path d="M 60 25 L 75 25 M 82 25 L 88 25" />
              <path d="M 58 42 L 95 42" />
              <path d="M 66 59 L 90 59" />
              <path d="M 58 76 L 96 76" />
              <path d="M 62 93 L 88 93 M 55 93 L 56 93" />
            </g>
          </svg>
        </div>

        {/* Texto SUILAFT que se condensa */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            style={{ animation: 'condenseText 2s ease-out 2.5s forwards' }}>
          SUILAFT
        </h1>
      </div>

      {/* Filtro SVG para el efecto de gotas que se unen (Gooey effect) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <style>{`
        /* Animación de esjambre: Partículas convergen al centro */
        @keyframes swarmIn {
          0% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.2);
          }
          10% {
            opacity: 1;
            transform: translate(var(--tx), var(--ty)) scale(1.5);
          }
          80% {
            opacity: 0.8;
            transform: translate(calc(var(--tx) * 0.1), calc(var(--ty) * 0.1)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
        }

        /* Flash de luz central de la fusión */
        @keyframes coreFlash {
          0% { opacity: 0; transform: scale(0.5); }
          30% { opacity: 0.8; transform: scale(1.5); filter: blur(30px); }
          100% { opacity: 0; transform: scale(3); }
        }

        /* Forjando el logo: Sale desde el flash, desenfocado hasta aclararse */
        @keyframes forgeLogo {
          0% {
            opacity: 0;
            transform: scale(0.85);
            filter: blur(20px) brightness(2);
          }
          40% {
            opacity: 1;
            transform: scale(1.05);
            filter: blur(5px) brightness(1.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px) brightness(1);
          }
        }

        /* El texto se condensa (letra estirada que se junta al centro) */
        @keyframes condenseText {
          0% { letter-spacing: 1em; opacity: 0; filter: blur(10px); }
          50% { opacity: 1; filter: blur(2px); }
          100% { letter-spacing: 0.15em; opacity: 1; filter: blur(0px); }
        }

        /* Desvanecimiento global */
        @keyframes fadeOutSplash {
          0% { opacity: 1; visibility: visible; background-color: #001533; }
          100% { opacity: 0; visibility: hidden; background-color: transparent; }
        }
      `}</style>
    </div>
  );
}

