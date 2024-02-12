import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import AddReward from '@/components/portfolio/AddReward';
import ClaimReward from '@/components/portfolio/ClaimReward';

const Stake = () => {
  return (
    <Layout>
      <Head title="Fluid - Portfolio"></Head>
      <Container>
        <AddReward></AddReward>
        <ClaimReward></ClaimReward>
      </Container>
    </Layout>
  );
};

export default Stake;

const Container = styled.div`
  ${tw`flex flex-col gap-12 w-full max-w-[640px] mx-auto`};
`;
