import React from 'react';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import { Spinner } from '@/components/nextui';

const TxWaitingModal = () => {
  return (
    <Wrapper>
      <Spinner size="lg"></Spinner>
      <Text semibold>In progress</Text>
    </Wrapper>
  );
};

export default TxWaitingModal;

const Wrapper = styled.div`
  ${tw`flex flex-col justify-center items-center gap-6 py-4`};
`;
