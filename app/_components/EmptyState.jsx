import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

function EmptyState({
  title,
  description,
  icon: Icon = Search,
  className,
  iconClassName,
}) {
  return (
    <div className={cn('empty-state', className)}>
      <div className={cn('icon-badge', iconClassName)}>
        <Icon className='h-5 w-5' />
      </div>
      <h3 className='text-2xl font-bold tracking-tight text-slate-950'>{title}</h3>
      {description && (
        <p className='mx-auto mt-3 max-w-xl section-copy'>
          {description}
        </p>
      )}
    </div>
  );
}

export default EmptyState;
