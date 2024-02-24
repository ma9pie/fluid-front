import React from 'react';

import Head from '@/components/layout/Head';
import Layout from '@/components/layout/Layout';
import Main from '@/components/pages/home/Main';

const Home = () => {
  return (
    <Layout>
      <Head title="Fluid | Home"></Head>
      <Main></Main>
    </Layout>
  );
};

export default Home;
