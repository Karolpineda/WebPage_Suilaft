import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'gradient' | 'dark';
}

export function Section({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'default' 
}: SectionProps) {
  const backgrounds = {
    default: 'bg-[#0A1020]',
    gradient: 'bg-gradient-to-b from-[#0A1020] to-[#101A33]/30',
    dark: 'bg-[#101A33]',
  };

  return (
    <section className={`py-20 relative ${backgrounds[background]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
