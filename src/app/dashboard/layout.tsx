import { AppBar } from '@/components/app-bar';
import { AppSidebar } from '@/components/app-side-bar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full flex flex-col">
        <AppBar />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}
