import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Head title="Fluid | Not Found"></Head>
      <Wrapper>
        <Text>404</Text>
        <Text>Not Found</Text>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col justify-center items-center`};
`;
const Text = styled.p`
  ${tw`text-5xl font-semibold text-brandColor`};
  ${tw`md:(text-9xl)`};
`;
