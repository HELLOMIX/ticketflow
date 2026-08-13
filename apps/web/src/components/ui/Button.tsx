type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-amber-400 text-neutral-950 hover:bg-amber-300 disabled:bg-neutral-800 disabled:text-neutral-500',
    secondary:
      'bg-red-500 text-white hover:bg-red-400 disabled:bg-neutral-800 disabled:text-neutral-500',
    outline:
      'border border-neutral-700 bg-transparent text-neutral-100 hover:bg-neutral-900 disabled:opacity-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
