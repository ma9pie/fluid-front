import '@/styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { WagmiProvider } from 'wagmi';

import ModalProvider from '@/components/providers/ModalProvider';
import { wagmiConfig } from '@/config';
import { IS_PRODUCTION } from '@/constants';
import { initializeGA, trackPageView } from '@/utils';
import seoConfig from '~/next-seo.config';

const queryClient = new QueryClient();

const App = (props: AppProps) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <NextUIProvider>
            <ModalProvider>
              <DefaultSeo {...seoConfig}></DefaultSeo>
              <Inner {...props}></Inner>
            </ModalProvider>
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

  // Production 콘솔 제거
  useEffect(() => {
    if (IS_PRODUCTION) {
      console.log = () => {};
    }
  }, []);

  return (
    <Wrapper className={className}>
      <Component {...pageProps}></Component>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`text-foreground bg-background`};
`;
