import React from 'react';

import Button from '@/components/common/buttons/Button';
import Layout from '@/components/layout/Layout';

const Index = () => {
  // 버튼 실행 로직을 구성해주세요.
  const handleClick = () => {};

  return (
    <Layout>
      <Button onClick={handleClick}>Run</Button>
    </Layout>
  );
};

export default Index;
