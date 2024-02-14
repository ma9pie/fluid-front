import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import AddReward from '@/components/pages/admin/AddReward';
import DistributeStGas from '@/components/pages/admin/DistributeStGas';

const Admin = () => {
  return (
    <Layout>
      <Head title="Fluid - Admin"></Head>
      <Layout.Container>
        <AddReward></AddReward>
        <DistributeStGas></DistributeStGas>
      </Layout.Container>
    </Layout>
  );
};

export default Admin;
