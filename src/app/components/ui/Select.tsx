interface SelectProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export function Select({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Selecciona una opción',
  required = false,
  className = '',
}: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[#AFC3E0] mb-2 text-sm font-medium">
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 bg-[#101A33] border border-[#223252] rounded-xl text-[#EAF2FF] placeholder:text-[#AFC3E0]/50 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
