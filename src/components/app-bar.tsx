import { ThemeSwitcher } from '@/providers/themeing';
import React from 'react';
import { SidebarTrigger } from './ui/sidebar';

export const AppBar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 py-2 border border-b-2">
      <SidebarTrigger />
      <ThemeSwitcher />
    </div>
  );
};
