import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { WagmiProvider } from 'wagmi';

import { NextUIProvider } from '@/components/nextui';
import ModalProvider from '@/components/providers/ModalProvider';
import { wagmiConfig } from '@/config';

const queryClient = new QueryClient();

const App = (props: AppProps) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Inner {...props}></Inner>
          </ThemeProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;

const Inner = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();

  const [className, setClassName] = useState<string | undefined>();

  useEffect(() => {
    setClassName(theme);
  }, [theme]);

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
