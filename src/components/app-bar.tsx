import { ThemeSwitcher } from '@/providers/themeing';
import React from 'react';

export const AppBar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 py-2 border border-b-2">
      <span className="font-black">KETERO</span>
      <ThemeSwitcher />
    </div>
  );
};
