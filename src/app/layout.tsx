import type { Metadata } from 'next';
import './globals.css';
import { SideMenu } from '@/components/ui/SideMenu/SideMenu';
import Header from '@/components/ui/Header/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import QueryProvider from '@/components/providers/QueryProvider';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Toaster } from 'sonner';
import LoadingOverlay from '@/components/ui/LoadingOverlay/LoadingOverLay';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Hammer Agency',
  description: 'Handle lifecycle of a project the easiest way',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <QueryProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <main className="flex flex-row bg-main-background min-w-container">
                <SideMenu />
                <div className="h-screen w-full">
                  <Header />
                  <Toaster />
                  {children}
                  <LoadingOverlay />
                </div>
              </main>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
