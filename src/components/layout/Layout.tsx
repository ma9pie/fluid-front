import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Header from '@/components/layout/Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  ${tw`flex flex-col min-h-screen`};
`;
const Content = styled.div`
  ${tw`flex flex-col flex-1 p-4`};
  ${tw`sm:p-6`};
`;
