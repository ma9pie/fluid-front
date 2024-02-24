import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import ClaimReward from '@/components/pages/fluid/ClaimReward';
import FaucetFluid from '@/components/pages/fluid/FaucetFluid';
import StakeFluid from '@/components/pages/fluid/StakeFluid';

const FluidPage = () => {
  return (
    <Layout>
      <Head title="Fluid | fluid"></Head>
      <Layout.Container>
        <FaucetFluid></FaucetFluid>
        <StakeFluid></StakeFluid>
        <ClaimReward></ClaimReward>
      </Layout.Container>
    </Layout>
  );
};

export default FluidPage;
