import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import UnstakeStGAS from '@/components/unstake/UnstakeStGAS';

const StGASPage = () => {
  return (
    <Layout>
      <Head></Head>
      <Layout.Container>
        <UnstakeStGAS></UnstakeStGAS>
      </Layout.Container>
    </Layout>
  );
};

export default StGASPage;
