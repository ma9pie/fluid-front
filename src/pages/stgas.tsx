import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import UnstakeStGas from '@/components/pages/stgas/UnstakeStGas';

const StGasPage = () => {
  return (
    <Layout>
      <Head></Head>
      <Layout.Container>
        <UnstakeStGas></UnstakeStGas>
      </Layout.Container>
    </Layout>
  );
};

export default StGasPage;
