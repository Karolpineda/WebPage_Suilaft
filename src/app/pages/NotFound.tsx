import { Link } from 'react-router';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1020] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#00AEEF]/5 rounded-full blur-3xl" />
          </div>
          <h1 className="relative text-[180px] md:text-[240px] font-bold bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent leading-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-5 h-5 text-[#00AEEF]" />
            <span className="text-[#00AEEF] text-sm font-medium uppercase tracking-wider">
              Página no encontrada
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#EAF2FF]">
            ¡Oops! Esta página no existe
          </h2>

          <p className="text-xl text-[#AFC3E0] max-w-lg mx-auto">
            Parece que el enlace que seguiste está roto o la página ha sido movida.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5" />
              Ir al inicio
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[#00AEEF] hover:text-[#33C3FF] font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-[#223252]">
          <p className="text-[#AFC3E0] mb-4">¿Buscas algo específico?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/soluciones"
              className="text-sm text-[#AFC3E0] hover:text-[#00AEEF] transition-colors"
            >
              Ver soluciones
            </Link>
            <span className="text-[#223252]">•</span>
            <Link
              to="/nosotros"
              className="text-sm text-[#AFC3E0] hover:text-[#00AEEF] transition-colors"
            >
              Sobre nosotros
            </Link>
            <span className="text-[#223252]">•</span>
            <Link
              to="/contacto"
              className="text-sm text-[#AFC3E0] hover:text-[#00AEEF] transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
