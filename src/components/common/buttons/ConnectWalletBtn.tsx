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
        <AccountButton full onClick={disconnect}>
          <Text>{ellipsis(account)}</Text>
        </AccountButton>
      ) : (
        <ConnectButton full onClick={openConnectWalletModal}>
          <Text>Connect Wallet</Text>
        </ConnectButton>
      )}
    </Wrapper>
  );
};

export default ConnectWalletBtn;

const Wrapper = styled.div`
  ${tw`w-full`};
  ${tw`md:w-32`};
`;
const AccountButton = styled(Button)`
  ${tw``};
`;
const ConnectButton = styled(Button)`
  ${tw`bg-brandColor`};
  ${tw`dark:(text-white bg-neutral-700)`};
`;
