import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper id="test">
      <HeaderWrapper>
        <Header></Header>
      </HeaderWrapper>
      <Flex col flex={1}>
        {children}
      </Flex>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </Wrapper>
  );
};

Layout.Container = styled.div<{ maxWidth?: number }>`
  ${tw`relative flex flex-col gap-12 w-full mx-auto`};
  ${tw`px-4 py-24`};
  ${tw`md:px-6`};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '640px')};
`;

export default Layout;

const Wrapper = styled.main`
  ${tw`flex flex-col min-h-screen`};
`;
const HeaderWrapper = styled.div`
  ${tw`fixed top-0 w-full z-10`};
`;
const FooterWrapper = styled.div`
  ${tw`fixed bottom-0 w-full z-10`};
`;
