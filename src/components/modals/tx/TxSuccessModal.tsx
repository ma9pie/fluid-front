import React from 'react';
import { MdCheck } from 'react-icons/md';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import useWallet from '@/hooks/useWallet';
import { TxSuccessModalProps } from '@/types';

const TxSuccessModal = ({ txHash, message }: TxSuccessModalProps) => {
  const { explorerUrl } = useWallet();

  const openExplorer = () => {
    if (!txHash) return;
    const url = `${explorerUrl}tx/${txHash}`;
    window.open(url, '_blank');
  };

  return (
    <Wrapper>
      <MdCheck size={80} color="#15c47e"></MdCheck>

      <Flex col items="center" gap={4}>
        <Text semibold>Transaction Completed!</Text>
        {message && (
          <Text semibold sm>
            {message}
          </Text>
        )}
      </Flex>

      <Button color="default" size="sm" onClick={openExplorer}>
        <Text xs> View on explorer</Text>
      </Button>
    </Wrapper>
  );
};

export default TxSuccessModal;

const Wrapper = styled.div`
  ${tw`flex flex-col items-center gap-6`};
`;
