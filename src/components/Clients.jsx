import { motion } from 'framer-motion';

const clients = [
  { name: 'OBRACIV', logo: '/clients/obraciv.png' },
  { name: 'ConstruDIPRO', logo: '/clients/construdipro.png' },
  { name: 'Castelo Jacome', logo: '/clients/castelojacome.png' },
  { name: 'MOTRANSA', logo: '/clients/motransa.png' },
  { name: 'MAXDRIVE', logo: '/clients/maxdrive.png' },
];

export default function Clients() {
  const allClients = [...clients, ...clients];

  return (
    <section className="py-20 md:py-28 bg-navy-darker relative overflow-hidden">
      <div className="glow-circle w-[400px] h-[400px] bg-blue-mid/10 top-[-100px] right-[10%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-blue-light uppercase tracking-wider">
            Clientes
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Empresas que <span className="gradient-text">confían</span> en nosotros
          </h2>
        </motion.div>
      </div>

      {/* Infinite marquee carousel — Striking white cards */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-navy-darker to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-navy-darker to-transparent pointer-events-none" />

        <div className="flex animate-marquee w-max py-4">
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-6 group"
            >
              {/* Solid white card for high contrast and rendering images natively */}
              <div className="w-[220px] h-[100px] rounded-xl bg-white shadow-lg flex items-center justify-center p-5 card-striking border-b-4 border-blue-mid">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-soft">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="w-7 h-7 rounded-full bg-navy border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
              >
                {n}
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-navy">
            +50 empresas <span className="font-normal text-navy/70">ya confían en My Soft</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
