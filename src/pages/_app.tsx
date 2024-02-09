import '@/styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { WagmiConfig } from 'wagmi';

import ModalProvider from '@/components/providers/ModalProvider';
import { wagmiConfig } from '@/config';

const App = (props: AppProps) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Inner {...props}></Inner>
        </ThemeProvider>
      </NextUIProvider>
    </WagmiConfig>
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
