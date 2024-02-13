import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </Wrapper>
  );
};

Layout.Container = styled.div`
  ${tw`flex flex-col gap-12 w-full max-w-[640px] mx-auto`};
`;

export default Layout;

const Wrapper = styled.main`
  ${tw`flex flex-col min-h-screen`};
`;
const Content = styled.div`
  ${tw`flex flex-col flex-1`};
  ${tw`px-4 py-12`};
  ${tw`md:(px-6 py-24)`};
`;
