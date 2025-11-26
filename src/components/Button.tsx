import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md disabled:bg-blue-300',
    secondary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow-md disabled:bg-emerald-300',
    outline: 'border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 disabled:border-gray-200 disabled:text-gray-400',
    ghost: 'hover:bg-gray-100 text-gray-700 disabled:text-gray-400',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-sm hover:shadow-md disabled:bg-red-300',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
