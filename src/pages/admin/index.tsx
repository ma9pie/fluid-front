import React from 'react';
import tw, { styled } from 'twin.macro';

import AddReward from '@/components/admin/AddReward';
import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';

const Admin = () => {
  return (
    <Layout>
      <Head title="Fluid - Admin"></Head>
      <Layout.Container>
        <AddReward></AddReward>
      </Layout.Container>
    </Layout>
  );
};

export default Admin;
