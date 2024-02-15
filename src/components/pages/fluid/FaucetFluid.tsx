import React from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { FLUID } from '@/constants';
import useContract from '@/hooks/useContract';
import useTokenBalance from '@/hooks/useTokenBalance';
import useTransaction from '@/hooks/useTransaction';
import useWallet from '@/hooks/useWallet';

const FaucetFluid = () => {
  const { account } = useWallet();
  const { isLoading, runTx } = useTransaction();
  const { faucetFluid } = useContract();
  const { refetch: refetchFluidBalance } = useTokenBalance({
    token: FLUID,
  });

  // Faucet fluid
  const handleClick = () => {
    runTx({
      txFn: () => faucetFluid(),
      onAfterTx: () => {
        refetchFluidBalance();
      },
    });
  };

  return (
    <Wrapper>
      <Text _2xl semibold>
        Faucet Fluid
      </Text>

      <Spacing height={64}></Spacing>

      <TxRunButton
        buttonText="Faucet"
        isLoading={isLoading}
        disabled={!Boolean(account)}
        onClick={handleClick}
      ></TxRunButton>
    </Wrapper>
  );
};

export default FaucetFluid;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
