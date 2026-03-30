import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[#AFC3E0] mb-2 text-sm font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-[#101A33] border border-[#223252] rounded-xl text-[#EAF2FF] placeholder:text-[#AFC3E0]/50 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
