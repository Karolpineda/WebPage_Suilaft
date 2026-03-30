import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';

const services = [
  'SUILAFT Full',
  'SUILAFT Risk',
  'SUILAFT Debidas Diligencias',
  'ERP para Institutos Superiores',
  'ERP para Capacitaciones',
  'ERP para Cacaotera',
  'ZUIPAY Facturación Electrónica',
  'Sistema Contable',
  'Desarrollo a Medida',
  'Consultoría Tecnológica',
  'Otro'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <span className="text-[#00AEEF] text-sm font-medium">Contáctanos</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#EAF2FF] mb-6">
              Hablemos de tu{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#1E4ED8] bg-clip-text text-transparent">
                Proyecto
              </span>
            </h1>
            
            <p className="text-xl text-[#AFC3E0]">
              Estamos listos para transformar tus ideas en soluciones tecnológicas reales. 
              Agenda una demo o solicita una cotización sin compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#EAF2FF] mb-6">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#00AEEF]" />
                    </div>
                    <div>
                      <h3 className="text-[#EAF2FF] font-semibold mb-1">Email</h3>
                      <a href="mailto:info@mysoft.com" className="text-[#AFC3E0] hover:text-[#00AEEF] transition-colors">
                        info@mysoft.com
                      </a>
                      <br />
                      <a href="mailto:ventas@mysoft.com" className="text-[#AFC3E0] hover:text-[#00AEEF] transition-colors">
                        ventas@mysoft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#00AEEF]" />
                    </div>
                    <div>
                      <h3 className="text-[#EAF2FF] font-semibold mb-1">Teléfono</h3>
                      <a href="tel:+1234567890" className="text-[#AFC3E0] hover:text-[#00AEEF] transition-colors block">
                        +1 (234) 567-890
                      </a>
                      <a href="tel:+1234567891" className="text-[#AFC3E0] hover:text-[#00AEEF] transition-colors block">
                        +1 (234) 567-891
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#00AEEF]" />
                    </div>
                    <div>
                      <h3 className="text-[#EAF2FF] font-semibold mb-1">Ubicación</h3>
                      <p className="text-[#AFC3E0]">
                        Av. Principal 123<br />
                        Edificio Corporativo<br />
                        Ciudad, País
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#223252]">
                  <h3 className="text-[#EAF2FF] font-semibold mb-4">Horario de Atención</h3>
                  <div className="space-y-2 text-[#AFC3E0]">
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 1:00 PM</p>
                    <p className="text-[#00AEEF] font-medium">Soporte técnico 24/7</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 rounded-xl transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Chatear por WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-[#EAF2FF] mb-2">
                  Solicita una Cotización
                </h2>
                <p className="text-[#AFC3E0] mb-8">
                  Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.
                </p>

                {isSubmitted ? (
                  <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-[#00AEEF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAF2FF] mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-[#AFC3E0]">
                      Gracias por contactarnos. Nos comunicaremos contigo pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Nombre completo *"
                        name="name"
                        type="text"
                        placeholder="Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Empresa *"
                        name="company"
                        type="text"
                        placeholder="Mi Empresa S.A."
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Correo electrónico *"
                        name="email"
                        type="email"
                        placeholder="juan@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Teléfono *"
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#AFC3E0] mb-2 text-sm font-medium">
                        Servicio de interés *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A1020] border border-[#223252] rounded-xl text-[#EAF2FF] focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Textarea
                      label="Mensaje"
                      name="message"
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Enviar solicitud
                      <Send className="w-5 h-5" />
                    </Button>

                    <p className="text-sm text-[#AFC3E0] text-center">
                      Al enviar este formulario, aceptas nuestra política de privacidad y 
                      términos de uso. Tus datos estarán protegidos.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAF2FF] mb-4">
              ¿Prefieres una reunión presencial?
            </h2>
            <p className="text-xl text-[#AFC3E0] mb-8 max-w-2xl mx-auto">
              Visita nuestras oficinas o agenda una videollamada con nuestros expertos. 
              Estamos aquí para escucharte y entender tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Agendar reunión
              </Button>
              <Button variant="secondary" size="lg">
                Ver mapa de ubicación
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
