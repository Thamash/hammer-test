'use client';

import React from 'react';
import Image from 'next/image';
import { ToggleButtonProps } from './ToggleButton.types';

export const ToggleButton = ({
  handleClick,
  expandedPosition,
  collapsedPosition,
  isOpen,
}: ToggleButtonProps) => {
  return (
    <button
      onClick={() => handleClick()}
      className="absolute top-7 z-50 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 transition-all duration-300"
      style={{
        background: '#402074',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        left: `${isOpen ? expandedPosition : collapsedPosition}px`,
      }}
    >
      <Image
        src="/icons/menu/right-arrow-double.svg"
        alt="Vercel logomark"
        width={11}
        height={10}
      />
    </button>
  );
};
