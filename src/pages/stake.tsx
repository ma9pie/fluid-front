import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import ClaimReward from '@/components/stake/ClaimReward';
import FaucetFluid from '@/components/stake/FaucetFluid';
import StakeFluid from '@/components/stake/StakeFluid';

const Stake = () => {
  return (
    <Layout>
      <Head title="Fluid - Stake"></Head>
      <Layout.Container>
        <FaucetFluid></FaucetFluid>
        <StakeFluid></StakeFluid>
        <ClaimReward></ClaimReward>
      </Layout.Container>
    </Layout>
  );
};

export default Stake;
