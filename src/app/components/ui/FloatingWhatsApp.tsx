import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '1234567890'; // Número de WhatsApp
  const message = '¡Hola! Me interesa conocer más sobre las soluciones de Suilaft.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-[#101A33] border border-[#223252] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Suilaft</h3>
                <p className="text-white/80 text-xs">Disponible ahora</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <div className="bg-[#0A1020] rounded-lg p-3">
              <p className="text-[#EAF2FF] text-sm">
                👋 ¡Hola! ¿En qué podemos ayudarte hoy?
              </p>
            </div>
            <p className="text-[#AFC3E0] text-xs">
              Respuesta inmediata de nuestro equipo
            </p>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#223252]">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar conversación
            </button>
          </div>
        </div>
      )}
    </>
  );
}
