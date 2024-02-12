import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
}

const Component = ({ title = 'Fluid' }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      ></meta>
    </Head>
  );
};

export default Component;
