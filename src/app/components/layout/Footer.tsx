import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101A33] border-t border-[#223252] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#1E4ED8] flex items-center justify-center">
                <span className="text-[#0A1020] font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-xl font-bold text-[#EAF2FF]">Suilaft</span>
                <p className="text-xs text-[#AFC3E0] -mt-0.5">by Grupo Consulteg</p>
              </div>
            </div>
            <p className="text-[#AFC3E0] text-sm leading-relaxed mb-6">
              Soluciones tecnológicas innovadoras con 15 años de experiencia. Transformamos empresas con software a medida.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#223252] flex items-center justify-center text-[#AFC3E0] hover:bg-[#00AEEF] hover:text-[#0A1020] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#223252] flex items-center justify-center text-[#AFC3E0] hover:bg-[#00AEEF] hover:text-[#0A1020] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#223252] flex items-center justify-center text-[#AFC3E0] hover:bg-[#00AEEF] hover:text-[#0A1020] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[#EAF2FF] font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/soluciones" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  SUILAFT Compliance
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  ERP Personalizado
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  ZUIPAY Facturación
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Sistema Contable
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Desarrollo a Medida
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#EAF2FF] font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nosotros" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
                  Casos de éxito
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#EAF2FF] font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#AFC3E0] text-sm">Email</p>
                  <a href="mailto:info@Suilaft.com" className="text-[#EAF2FF] text-sm hover:text-[#00AEEF] transition-colors">
                    info@Suilaft.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#AFC3E0] text-sm">Teléfono</p>
                  <a href="tel:+1234567890" className="text-[#EAF2FF] text-sm hover:text-[#00AEEF] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#AFC3E0] text-sm">Ubicación</p>
                  <p className="text-[#EAF2FF] text-sm">
                    Ciudad, País
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#223252] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#AFC3E0] text-sm">
            © {currentYear} Suilaft. Todos los derechos reservados. | Powered by Grupo Consulteg
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
              Términos
            </a>
            <a href="#" className="text-[#AFC3E0] hover:text-[#00AEEF] text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
