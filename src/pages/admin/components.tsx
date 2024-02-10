import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import TokenAmountInput from '@/components/common/inputs/TokenAmountInput';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/nextui';
import { ETH, FLUID, STGAS } from '@/constants';

const Components = () => {
  const [amountOfETH, setAmountOfETH] = useState('');
  const [amountOfFluid, setAmountOfFluid] = useState('');
  const [amountOfStGas, setAmountOfStGas] = useState('');

  return (
    <Layout>
      <Container>
        <TokenAmountInput
          token={ETH}
          amount={amountOfETH}
          onChange={() => {}}
        ></TokenAmountInput>
        <TokenAmountInput
          token={FLUID}
          amount={amountOfFluid}
          onChange={() => {}}
        ></TokenAmountInput>
        <TokenAmountInput
          token={STGAS}
          amount={amountOfStGas}
          onChange={() => {}}
        ></TokenAmountInput>
      </Container>
    </Layout>
  );
};

export default Components;

const Container = styled.div`
  ${tw`flex flex-col gap-6 w-96`};
`;
