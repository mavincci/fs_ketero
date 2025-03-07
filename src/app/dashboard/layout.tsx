import { AppBar } from '@/components/app-bar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <AppBar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
