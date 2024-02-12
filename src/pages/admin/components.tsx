import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import TokenAmountInput from '@/components/common/inputs/TokenAmountInput';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/nextui';
import { ETH, FLUID, STGAS } from '@/constants';
import useModal from '@/hooks/useModal';
import usePageAccess from '@/hooks/usePageAccess';

const Components = () => {
  const { isShow } = usePageAccess();
  const { openTxSuccessModal, openTxFailedModal, openTxWaitingModal } =
    useModal();

  const [amountOfETH, setAmountOfETH] = useState('');
  const [amountOfFluid, setAmountOfFluid] = useState('');
  const [amountOfStGas, setAmountOfStGas] = useState('');

  if (!isShow) return null;
  return (
    <Layout>
      <Container>
        <Button color="primary" onClick={() => openTxSuccessModal({})}>
          openTxSuccessModal
        </Button>

        <Button color="primary" onClick={() => openTxFailedModal()}>
          openTxFailedModal
        </Button>

        <Button color="primary" onClick={() => openTxWaitingModal()}>
          openTxWaitingModal
        </Button>

        <InputWrapper>
          <TokenAmountInput
            token={ETH}
            amount={amountOfETH}
            onChange={() => {}}
          ></TokenAmountInput>
        </InputWrapper>

        <InputWrapper>
          <TokenAmountInput
            token={FLUID}
            amount={amountOfFluid}
            onChange={() => {}}
          ></TokenAmountInput>
        </InputWrapper>

        <InputWrapper>
          <TokenAmountInput
            token={STGAS}
            amount={amountOfStGas}
            onChange={() => {}}
          ></TokenAmountInput>
        </InputWrapper>
      </Container>
    </Layout>
  );
};

export default Components;

const Container = styled.div`
  ${tw`flex flex-col gap-6 max-w-[384px]`};
`;
const InputWrapper = styled(Card)`
  ${tw`p-4`};
`;
