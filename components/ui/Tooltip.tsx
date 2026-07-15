'use client';

import { useState } from 'react';

interface Props {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

export default function Tooltip({ content, children, position = 'top' }: Props) {
  const [show, setShow] = useState(false);
  const posClass = position === 'top'
    ? 'bottom-full mb-2 left-1/2 -translate-x-1/2'
    : 'top-full mt-2 left-1/2 -translate-x-1/2';

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <div
        className={`absolute z-50 pointer-events-none whitespace-nowrap px-3 py-1.5 rounded-lg glass text-xs font-medium text-[--text-primary] shadow-lg transition-all duration-200 ${
          posClass
        } ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
