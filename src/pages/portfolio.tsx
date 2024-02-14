import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import PositionList from '@/components/pages/protfolio/PositionList';

const PortfolioPage = () => {
  return (
    <Layout>
      <Head></Head>
      <PositionList></PositionList>
      <Layout.Container></Layout.Container>
    </Layout>
  );
};

export default PortfolioPage;
