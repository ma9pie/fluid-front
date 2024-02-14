import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import LinkBox from '@/components/home/LinkBox';
import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Head title="Fluid - Home"></Head>
      <Flex justify="center" items="center" flex={1}>
        <ContentWrapper>
          <Text
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            semibold
            size={72}
          >
            Fluid
          </Text>
        </ContentWrapper>
      </Flex>
    </Layout>
  );
};

export default Home;

const ContentWrapper = styled.div`
  ${tw`relative flex justify-center items-center min-h-[360px]`};
`;
