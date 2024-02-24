import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import PositionList from '@/components/pages/protfolio/PositionList';

const PortfolioPage = () => {
  return (
    <Layout>
      <Head title="Fluid | protfolio"></Head>
      <Layout.Container maxWidth={1280}>
        <PositionList></PositionList>
      </Layout.Container>
    </Layout>
  );
};

export default PortfolioPage;
