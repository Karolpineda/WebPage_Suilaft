import { Link, useNavigate } from 'react-router';
import {
  Shield,
  BarChart3,
  FileCheck,
  GraduationCap,
  Building2,
  Factory,
  Receipt,
  Database,
  Code,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';

const solutions = [
  {
    category: 'Compliance & Riesgos',
    products: [
      {
        icon: Shield,
        title: 'SUILAFT Full',
        description:
          'Solución integral de compliance y prevención de lavado de activos (AML/CFT). Incluye monitoreo continuo, reportes automáticos, gestión de alertas y cumplimiento normativo completo.',
        benefit: 'Cumplimiento total'
      },
      {
        icon: BarChart3,
        title: 'SUILAFT Risk',
        description:
          'Sistema especializado en gestión y análisis de riesgos financieros y operacionales. Matrices de riesgo, scoring automático, planes de mitigación y dashboard ejecutivo.',
        benefit: 'Gestión de riesgos'
      },
      {
        icon: FileCheck,
        title: 'SUILAFT Debidas Diligencias',
        description:
          'Validación exhaustiva y análisis de contrapartes con IA. Verificación de identidad, screening de listas restrictivas, análisis de reputación y generación de informes.',
        benefit: 'Validación inteligente'
      }
    ]
  },
  {
    category: 'ERPs Verticales',
    products: [
      {
        icon: GraduationCap,
        title: 'ERP para Institutos Superiores',
        description:
          'Gestión académica y administrativa completa: matrículas, horarios, calificaciones, finanzas, RRHH, bibliotecas y portales para estudiantes y docentes.',
        benefit: 'Educación eficiente'
      },
      {
        icon: Building2,
        title: 'ERP para Capacitaciones',
        description:
          'Control total de cursos, alumnos, instructores, certificaciones, pagos y reportes. Incluye plataforma LMS integrada y emisión automática de certificados.',
        benefit: 'Gestión integral'
      },
      {
        icon: Factory,
        title: 'ERP para Cacaotera',
        description:
          'Control operativo y administrativo especializado para el sector cacaotero: trazabilidad, control de calidad, logística, compras, ventas y gestión de productores.',
        benefit: 'Sector específico'
      }
    ]
  },
  {
    category: 'Sistemas Financieros',
    products: [
      {
        icon: Receipt,
        title: 'ZUIPAY Facturación Electrónica',
        description:
          'Emisión y gestión de comprobantes electrónicos (facturas, notas de crédito/débito, guías de remisión). Integración con SRI/SUNAT, firma electrónica y reportes tributarios.',
        benefit: 'Facturación legal'
      },
      {
        icon: Database,
        title: 'Sistema Contable',
        description:
          'Control contable y financiero completo con plan de cuentas personalizable, libro diario, mayor, balance, estados financieros y reportes en tiempo real.',
        benefit: 'Control financiero'
      }
    ]
  },
  {
    category: 'Desarrollo Personalizado',
    products: [
      {
        icon: Code,
        title: 'Soluciones Tecnológicas a Medida',
        description:
          'Desarrollo de software personalizado según las necesidades específicas de tu empresa. Aplicaciones web, móviles, integraciones, APIs y sistemas empresariales únicos.',
        benefit: 'Total flexibilidad'
      }
    ]
  }
];

const features = [
  { title: 'Soporte 24/7', description: 'Asistencia técnica continua' },
  { title: 'Actualizaciones', description: 'Mejoras constantes incluidas' },
  { title: 'Capacitación', description: 'Entrenamiento para tu equipo' },
  { title: 'Hosting seguro', description: 'Infraestructura enterprise' },
  { title: 'Backups diarios', description: 'Respaldo automático de datos' },
  { title: 'APIs abiertas', description: 'Integración con otros sistemas' },
  { title: 'Personalización', description: 'Adaptable a tus procesos' },
  { title: 'Reportes avanzados', description: 'Analytics y dashboards' }
];

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Fondo animado */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A1020]" />
        <div className="absolute -top-16 -left-16 w-[360px] h-[360px] bg-[#00AEEF]/15 rounded-full blur-[90px] float-slow" />
        <div className="absolute top-24 right-0 w-[420px] h-[420px] bg-[#1E4ED8]/15 rounded-full blur-[110px] float-medium" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#00AEEF]/10 rounded-full blur-[90px] float-fast" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#6ea8ff33_1px,transparent_1px),linear-gradient(to_bottom,#6ea8ff33_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/25 rounded-full mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#00AEEF] animate-pulse" />
              <span className="text-[#00AEEF] text-sm font-medium">Catálogo de Soluciones</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#EAF2FF] mb-6 leading-tight">
              Soluciones{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] via-[#7CD7FF] to-[#1E4ED8] bg-clip-text text-transparent">
                Empresariales
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#AFC3E0] mb-10">
              Software especializado para cada área de tu organización. Desde compliance hasta ERPs
              verticales, con una experiencia moderna, escalable y elegante.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contacto">
                <Button variant="primary" size="lg">
                  Solicitar asesoría
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button variant="secondary" size="lg">
                  Conocer MySoft
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones por categoría */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="rounded-3xl border border-[#223252] bg-gradient-to-b from-[#101A33]/70 to-[#0A1020]/70 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,174,239,0.06)] fade-in-up"
                style={{ animationDelay: `${categoryIndex * 120}ms` }}
              >
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-[#AFC3E0] border border-[#2A4168] bg-[#0B162E] mb-3">
                    Categoría {String(categoryIndex + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#EAF2FF] mb-3">
                    {category.category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div
                      key={product.title}
                      className="relative group rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(0,174,239,0.20)]"
                      style={{ animationDelay: `${productIndex * 90}ms` }}
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#00AEEF]/10 to-[#1E4ED8]/10 pointer-events-none" />
                      <ProductCard
                        icon={product.icon}
                        title={product.title}
                        description={product.description}
                        benefit={product.benefit}
                        onLearnMore={() => navigate('/contacto')}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[760px] h-[260px] bg-[#00AEEF]/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#223252] rounded-3xl p-8 md:p-12 fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#EAF2FF] mb-4">
                Todas nuestras soluciones incluyen
              </h2>
              <p className="text-lg text-[#AFC3E0]">Características premium en cada producto</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-[#0A1020]/55 border border-[#223252] rounded-xl p-6 hover:border-[#00AEEF]/35 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] mb-3 pulse-dot" />
                  <h3 className="text-[#EAF2FF] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#AFC3E0] text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[#2A4168] bg-gradient-to-br from-[#0F1A34] to-[#0A1020] p-8 md:p-12 shadow-[0_0_50px_rgba(30,78,216,0.15)] fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-xl text-[#AFC3E0] mb-10">
              Creamos soluciones personalizadas para cualquier necesidad empresarial.
              Cuéntanos tu proyecto y lo hacemos realidad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contacto">
                <Button variant="primary" size="lg">
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button variant="secondary" size="lg">
                  Conocer más de MySoft
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeInUp .75s ease forwards;
        }
        .float-slow { animation: floatY 9s ease-in-out infinite; }
        .float-medium { animation: floatY 7s ease-in-out infinite; }
        .float-fast { animation: floatY 5.5s ease-in-out infinite; }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }
      `}</style>
    </div>
  );
}