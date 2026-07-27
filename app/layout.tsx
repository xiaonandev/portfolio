import type { Metadata } from 'next';
import './globals.css';
import Provider from '@/components/HOC/provider';
import ScrollToTop from '@/components/Helper/ScrollToTop';

export const metadata: Metadata = {
  title: "Xiaonan Dong — Frontend Developer",
  description: "Frontend developer portfolio featuring React, TypeScript and Next.js product case studies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Provider>{children}</Provider>

        <ScrollToTop />
      </body>
    </html>
  );
}
