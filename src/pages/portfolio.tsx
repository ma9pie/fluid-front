import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import PositionList from '@/components/protfolio/PositionList';

const Stake = () => {
  return (
    <Layout>
      <Head title="Fluid - Portfolio"></Head>
      <PositionList></PositionList>
      <Layout.Container></Layout.Container>
    </Layout>
  );
};

export default Stake;
