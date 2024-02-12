import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import FaucetFluid from '@/components/stake/FaucetFluid';
import StakeFluid from '@/components/stake/StakeFluid';

const Stake = () => {
  return (
    <Layout>
      <Head title="Fluid - Stake"></Head>
      <Container>
        <StakeFluid></StakeFluid>
        <FaucetFluid></FaucetFluid>
      </Container>
    </Layout>
  );
};

export default Stake;

const Container = styled.div`
  ${tw`flex flex-col gap-12 w-full max-w-[640px] mx-auto`};
`;
