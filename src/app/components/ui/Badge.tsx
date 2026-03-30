interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/20',
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-lg text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
