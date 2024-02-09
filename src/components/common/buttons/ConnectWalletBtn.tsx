import React from 'react';
import tw, { styled } from 'twin.macro';
import { useConnect } from 'wagmi';

import Button from '@/components/common/buttons/Button';
import useWallet from '@/hooks/useWallet';
import { ellipsis } from '@/utils';

const ConnectWalletBtn = () => {
  useConnect();
  const { account, disconnect, openConnectWalletModal } = useWallet();

  return (
    <Wrapper>
      {account ? (
        <Button full onClick={disconnect}>
          {ellipsis(account)}
        </Button>
      ) : (
        <Button full color="primary" onClick={openConnectWalletModal}>
          Connect Wallet
        </Button>
      )}
    </Wrapper>
  );
};

export default ConnectWalletBtn;

const Wrapper = styled.div`
  ${tw`w-32`};
`;
