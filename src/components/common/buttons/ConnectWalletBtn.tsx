import React from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
import Text from '@/components/common/Text';
import useModal from '@/hooks/useModal';
import useWallet from '@/hooks/useWallet';
import { ellipsis } from '@/utils';

const ConnectWalletBtn = () => {
  const { account, disconnect } = useWallet();
  const { openConnectWalletModal } = useModal();

  return (
    <Wrapper>
      {account ? (
        <Button full onClick={disconnect}>
          <Text>{ellipsis(account)}</Text>
        </Button>
      ) : (
        <Button className="bg-brandColor" full onClick={openConnectWalletModal}>
          <Text black>Connect Wallet</Text>
        </Button>
      )}
    </Wrapper>
  );
};

export default ConnectWalletBtn;

const Wrapper = styled.div`
  ${tw`w-full`};
  ${tw`md:w-32`};
`;
