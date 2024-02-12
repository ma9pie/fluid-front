import '@/styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { WagmiProvider } from 'wagmi';

import ModalProvider from '@/components/providers/ModalProvider';
import { wagmiConfig } from '@/config';
import useGA4 from '@/hooks/useGA4';

const queryClient = new QueryClient();

const App = (props: AppProps) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <NextUIProvider>
            <Inner {...props}></Inner>
          </NextUIProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;

const Inner = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const { theme } = useTheme();
  const { initializeGA, trackPageView } = useGA4();

  const [className, setClassName] = useState<string | undefined>();

  useEffect(() => {
    setClassName(theme);
  }, [theme]);

  // Init GA
  useEffect(() => {
    initializeGA();
  }, []);

  // 페이지 view 추적
  useEffect(() => {
    trackPageView(router.pathname);
  }, [router.pathname]);

  return (
    <Wrapper className={className}>
      <ModalProvider>
        <Component {...pageProps}></Component>
      </ModalProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`text-foreground bg-background`};
`;
