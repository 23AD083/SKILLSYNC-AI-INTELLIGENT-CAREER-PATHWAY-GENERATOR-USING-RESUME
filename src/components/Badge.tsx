import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({ children, variant = 'primary', size = 'md', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-blue-100 text-blue-700 border-blue-200',
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    error: 'bg-red-100 text-red-700 border-red-200',
    info: 'bg-sky-100 text-sky-700 border-sky-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
