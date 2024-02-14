import { isAddress } from 'ethers';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import AddressInput from '@/components/common/inputs/AddressInput';
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

  const [address, setAddress] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState('Faucet');

  // Input 상태 관리
  const handleChange = (value: string) => {
    setAddress(value);
  };

  // 버튼 활성화 여부
  useEffect(() => {
    if (isLoading || !account || !isAddress(address)) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [isLoading, account, address]);

  // 버튼 텍스트 관리
  useEffect(() => {
    if (!address || isAddress(address)) {
      setButtonText('Faucet');
    } else {
      setButtonText('Invalid address');
    }
  }, [address]);

  // 입력값 초기화
  const resetInputs = () => {
    setAddress('');
  };

  // Faucet fluid
  const handleClick = () => {
    runTx({
      txFn: () => faucetFluid(),
      onAfterTx: () => {
        refetchFluidBalance();
        resetInputs();
      },
    });
  };

  return (
    <Wrapper>
      <Text _2xl semibold>
        Faucet Fluid
      </Text>

      <Spacing height={24}></Spacing>

      <Flex col gap={8}>
        <Text>Wallet Address</Text>
        <AddressInput value={address} onChange={handleChange}></AddressInput>
      </Flex>

      <Spacing height={64}></Spacing>

      <TxRunButton
        buttonText={buttonText}
        isLoading={isLoading}
        disabled={disableButton}
        onClick={handleClick}
      ></TxRunButton>
    </Wrapper>
  );
};

export default FaucetFluid;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
