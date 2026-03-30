import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-[#101A33]/50 border border-[#223252] rounded-xl p-6 hover:bg-[#101A33] hover:border-[#00AEEF]/30 transition-all duration-300">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF]/10 to-[#1E4ED8]/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-6 h-6 text-[#00AEEF]" />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold text-[#EAF2FF] mb-2">{title}</h3>
      <p className="text-[#AFC3E0] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
