import React from 'react';
import { cn } from '@/lib/utils';

function StatCard({ value, label, className, valueClassName, labelClassName }) {
  return (
    <div className={cn('stat-card flex min-w-0 flex-col items-center justify-center text-center', className)}>
      <p className={cn('stat-value break-words text-center leading-tight', valueClassName)}>{value}</p>
      <p className={cn('stat-label break-words text-center leading-tight', labelClassName)}>{label}</p>
    </div>
  );
}

export default StatCard;
