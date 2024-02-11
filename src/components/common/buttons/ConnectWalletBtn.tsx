import React from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
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
          {ellipsis(account)}
        </Button>
      ) : (
        <Button full onClick={openConnectWalletModal}>
          Connect Wallet
        </Button>
      )}
    </Wrapper>
  );
};

export default ConnectWalletBtn;

const Wrapper = styled.div`
  ${tw`w-full`};
  ${tw`sm:w-32`};
`;
