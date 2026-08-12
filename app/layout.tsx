import type { Metadata } from 'next';
import './globals.css';
import Provider from '@/components/HOC/provider';
import ScrollToTop from '@/components/Helper/ScrollToTop';

export const metadata: Metadata = {
  title: "Xiaonan Dong — Full-stack Developer",
  description:
    "Full-stack developer portfolio with a frontend focus, featuring React, TypeScript, Next.js, Prisma and PostgreSQL projects.",
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
