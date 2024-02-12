import { Contract, isAddress } from 'ethers';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import FluidABI from '@/abis/Fluid.json';
import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import AddressInput from '@/components/common/inputs/AddressInput';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { FLUID_CONTRACT_ADDRESS } from '@/constants';
import { FLUID } from '@/constants';
import useContract from '@/hooks/useContract';
import useEthers from '@/hooks/useEthers';
import useModal from '@/hooks/useModal';
import useTokenBalance from '@/hooks/useTokenBalance';
import useWallet from '@/hooks/useWallet';

const FaucetFluid = () => {
  const { account } = useWallet();
  const { getTxReceipt } = useContract();
  const { signer } = useEthers();
  const { refetch: refetchFluidBalance } = useTokenBalance({
    token: FLUID,
  });
  const {
    openTxSuccessModal,
    openTxFailedModal,
    openTxWaitingModal,
    changeModal,
  } = useModal();

  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  // Faucet
  const faucet = async () => {
    try {
      if (!account) return;
      setIsLoading(true);
      openTxWaitingModal();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);

      const { hash } = await contract.mint();
      const receipt = await getTxReceipt(hash);
      console.log(receipt);

      changeModal(() =>
        openTxSuccessModal({
          txHash: hash,
        })
      );
      refetchFluidBalance();
      resetInputs();
    } catch (err) {
      console.log(err);
      changeModal(() => openTxFailedModal());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Text xl semibold>
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
        onClick={faucet}
      ></TxRunButton>
    </Wrapper>
  );
};

export default FaucetFluid;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
