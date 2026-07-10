import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';

import ResponsiveNav from '@/components/Home/NavBar/ResponsiveNav';
import Footer from '@/components/Home/Footer/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ResponsiveNav />

      {children}

      <Footer />
    </NextIntlClientProvider>
  );
}
