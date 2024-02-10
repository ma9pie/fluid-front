import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';

const TxFailedModal = () => {
  return (
    <Wrapper>
      <MdOutlineClose size={80} color="#f66570"></MdOutlineClose>
      <Text semibold>Transaction Failed</Text>
    </Wrapper>
  );
};

export default TxFailedModal;

const Wrapper = styled.div`
  ${tw`flex flex-col items-center gap-6`};
`;
