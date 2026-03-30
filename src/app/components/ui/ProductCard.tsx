import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
  onLearnMore?: () => void;
}

export function ProductCard({ icon: Icon, title, description, benefit, onLearnMore }: ProductCardProps) {
  return (
    <div className="group relative bg-[#101A33] border border-[#223252] rounded-2xl p-6 hover:border-[#00AEEF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00AEEF]/10 hover:-translate-y-1">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 via-[#00AEEF]/0 to-[#00AEEF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00AEEF]/20 to-[#1E4ED8]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-[#00AEEF]" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-[#EAF2FF] mb-3">{title}</h3>
        <p className="text-[#AFC3E0] mb-4 leading-relaxed">{description}</p>
        
        {/* Benefit badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-lg mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
          <span className="text-sm text-[#00AEEF]">{benefit}</span>
        </div>
        
        {/* CTA */}
        {onLearnMore && (
          <button
            onClick={onLearnMore}
            className="text-[#00AEEF] hover:text-[#33C3FF] font-medium text-sm flex items-center gap-2 group/btn"
          >
            Solicitar información
            <svg
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
