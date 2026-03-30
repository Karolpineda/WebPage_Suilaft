import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export function TestimonialCard({ name, role, company, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-[#101A33] border border-[#223252] rounded-2xl p-8 hover:border-[#00AEEF]/30 transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-[#00AEEF] fill-[#00AEEF]' : 'text-[#223252]'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-[#AFC3E0] leading-relaxed mb-6 italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#223252]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#1E4ED8] flex items-center justify-center">
          <span className="text-[#0A1020] font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="text-[#EAF2FF] font-semibold">{name}</h4>
          <p className="text-[#AFC3E0] text-sm">
            {role} en {company}
          </p>
        </div>
      </div>
    </div>
  );
}
