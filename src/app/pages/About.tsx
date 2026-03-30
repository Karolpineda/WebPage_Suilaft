import { Link } from 'react-router';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/ui/FeatureCard';

const values = [
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en transparencia, honestidad y resultados comprobados.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías para ofrecer soluciones vanguardistas y competitivas.'
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Cada proyecto es una oportunidad para superar expectativas con calidad superior.'
    },
    {
      icon: Zap,
      title: 'Eficiencia',
      description: 'Optimizamos procesos para maximizar productividad y reducir costos operativos.'
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Tu éxito es nuestro éxito. Nos involucramos de principio a fin en cada proyecto.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo contigo, entendiendo tus necesidades y co-creando soluciones.'
    },
  ];

  const milestones = [
    { year: '2010', title: 'Fundación de MySoft', description: 'Inicio de operaciones respaldados por Grupo Consulteg' },
    { year: '2014', title: 'Primera Suite SUILAFT', description: 'Lanzamiento de soluciones de compliance' },
    { year: '2018', title: '100+ Clientes', description: 'Alcanzamos presencia en múltiples industrias' },
    { year: '2021', title: 'Integración de IA', description: 'Incorporamos inteligencia artificial en nuestras soluciones' },
    { year: '2025', title: 'Expansión Regional', description: 'Presencia consolidada en Latinoamérica' },
  ];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-[#101A33]/30 to-[#0A1020]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00AEEF]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full mb-6">
              <span className="text-[#00AEEF] text-sm font-medium">Sobre MySoft</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#EAF2FF] mb-6">
              15 Años{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                Transformando
              </span>
              <br />
              Empresas
            </h1>
            
            <p className="text-xl text-[#AFC3E0]">
              Somos el brazo tecnológico de Grupo Consulteg, especializados en desarrollo de 
              software empresarial, compliance y soluciones con inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-[#AFC3E0] leading-relaxed">
                <p>
                  MySoft nació en 2010 como la división tecnológica de <strong className="text-[#00AEEF]">Grupo Consulteg</strong>, 
                  con la misión de llevar transformación digital a empresas que buscaban innovar 
                  y optimizar sus procesos operativos.
                </p>
                <p>
                  A lo largo de más de <strong className="text-[#00AEEF]">15 años</strong>, hemos desarrollado soluciones 
                  especializadas en compliance, ERPs verticales, facturación electrónica y sistemas contables, 
                  siempre adaptándonos a las necesidades únicas de cada industria.
                </p>
                <p>
                  Hoy, con la integración de <strong className="text-[#00AEEF]">Inteligencia Artificial</strong> y 
                  automatización avanzada, seguimos siendo líderes en innovación tecnológica empresarial, 
                  ayudando a nuestros clientes a ser más eficientes, seguros y competitivos.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00AEEF] mb-2">15+</div>
                  <div className="text-sm text-[#AFC3E0]">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00AEEF] mb-2">100+</div>
                  <div className="text-sm text-[#AFC3E0]">Clientes activos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00AEEF] mb-2">500+</div>
                  <div className="text-sm text-[#AFC3E0]">Proyectos</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#EAF2FF] mb-6">Respaldo de Grupo Consulteg</h3>
                <p className="text-[#AFC3E0] mb-6 leading-relaxed">
                  Como parte de Grupo Consulteg, contamos con el respaldo de una organización 
                  consolidada con presencia regional, expertise multidisciplinario y una red 
                  de profesionales especializados en diferentes áreas empresariales.
                </p>
                <ul className="space-y-3">
                  {[
                    'Solidez financiera y organizacional',
                    'Equipo multidisciplinario de expertos',
                    'Presencia en múltiples países',
                    'Experiencia en diversos sectores',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EAF2FF]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-xl text-[#AFC3E0]">
              Hitos importantes en nuestro camino de innovación
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00AEEF]/0 via-[#00AEEF]/50 to-[#00AEEF]/0" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-[#101A33] border border-[#223252] rounded-xl p-6 hover:border-[#00AEEF]/30 transition-colors">
                      <div className="text-3xl font-bold text-[#00AEEF] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-[#EAF2FF] mb-2">{milestone.title}</h3>
                      <p className="text-[#AFC3E0]">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-[#00AEEF] border-4 border-[#0A1020] relative z-10" />
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-[#AFC3E0] max-w-2xl mx-auto">
              Principios que guían cada decisión y cada línea de código que escribimos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#00AEEF]/20 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/10 rounded-full blur-3xl" />
              <Target className="w-12 h-12 text-[#00AEEF] mb-6" />
              <h3 className="text-3xl font-bold text-[#EAF2FF] mb-4">Misión</h3>
              <p className="text-[#AFC3E0] leading-relaxed">
                Transformar empresas mediante soluciones tecnológicas innovadoras, personalizadas 
                y de clase mundial, potenciando su eficiencia, seguridad y cumplimiento normativo 
                para que alcancen sus objetivos estratégicos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#101A33] to-[#0A1020] border border-[#1E4ED8]/20 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E4ED8]/10 rounded-full blur-3xl" />
              <TrendingUp className="w-12 h-12 text-[#1E4ED8] mb-6" />
              <h3 className="text-3xl font-bold text-[#EAF2FF] mb-4">Visión</h3>
              <p className="text-[#AFC3E0] leading-relaxed">
                Ser el referente tecnológico de transformación digital en Latinoamérica, reconocidos 
                por nuestra excelencia en desarrollo de software empresarial, integración de IA y 
                capacidad de adaptación a las necesidades únicas de cada industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAF2FF] mb-6">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-xl text-[#AFC3E0] mb-10">
            Únete a las empresas que confían en MySoft para su transformación digital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contacto">
              <Button variant="primary" size="lg">
                Hablemos de tu proyecto
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/soluciones">
              <Button variant="secondary" size="lg">
                Ver soluciones
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
