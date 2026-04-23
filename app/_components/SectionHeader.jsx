import React from 'react';
import { cn } from '@/lib/utils';

function SectionHeader({ title, description, align = 'left', className, titleClassName, descriptionClassName }) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <h2 className={cn('section-title', titleClassName)}>{title}</h2>
      {description && (
        <p className={cn('mt-2 section-copy', descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
