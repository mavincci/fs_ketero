import { ThemeSwitcher } from '@/providers/themeing';
import React from 'react';

export const AppBar = () => {
  return (
    <div className="flex flex-row justify-end items-center px-8 py-2 border border-b-2">
      <ThemeSwitcher />
    </div>
  );
};
