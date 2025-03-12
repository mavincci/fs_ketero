'use client';

import { ThemeSwitcher } from '@/providers/themeing';
import React from 'react';
import { useSidebar } from './ui/sidebar';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const AppBar = () => {
  const sidebar = useSidebar();

  return (
    <div className="flex flex-row justify-between items-center px-8 py-2 border border-b-2">
      <span className="space-x-8">
        <Button
          data-sidebar="trigger"
          data-slot="sidebar-trigger"
          variant="ghost"
          size="icon"
          className={'h-7 w-7'}
          onClick={(event) => {
            sidebar.toggleSidebar();
          }}
        >
          {sidebar.state == 'expanded' ? <ArrowLeft /> : <ArrowRight />}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        {sidebar.state == 'collapsed' && (
          <span className="font-black text-xl text-[var(--primary)] font-mono">KETERO</span>
        )}
      </span>

      <div className="flex items-center gap-8">
        <span className="italic">Michael Abebe</span>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
