import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import UnstakeStGAS from '@/components/unstake/UnstakeStGAS';

const Unstake = () => {
  return (
    <Layout>
      <Head title="Fluid - Unstake"></Head>
      <Layout.Container>
        <UnstakeStGAS></UnstakeStGAS>
      </Layout.Container>
    </Layout>
  );
};

export default Unstake;
