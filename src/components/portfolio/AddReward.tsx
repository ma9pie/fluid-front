import { BrowserProvider, Contract, formatUnits } from 'ethers';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import StGASABI from '@/abis/StGAS.json';
import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { FLUID, ST_GAS_CONTRACT_ADDRESS } from '@/constants';
import useContract from '@/hooks/useContract';
import useModal from '@/hooks/useModal';
import useWallet from '@/hooks/useWallet';
import { comma } from '@/utils';

const AddReward = () => {
  const { account } = useWallet();
  const { getTxReceipt, getTotalStakedFluid } = useContract();
  const {
    openTxSuccessModal,
    openTxFailedModal,
    openTxWaitingModal,
    changeModal,
  } = useModal();

  const [stakedFluid, setStakedFluid] = useState('0');

  const [isLoading, setIsLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    updateData();
  }, []);

  // 버튼 활성화 여부
  useEffect(() => {
    if (isLoading || !account) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [isLoading, account]);

  // 데이터 업데이트
  const updateData = async () => {
    const amount = await getTotalStakedFluid();
    setStakedFluid(formatUnits(amount, FLUID.decimals));
  };

  // Add reward
  const addReward = async () => {
    try {
      if (!account) return;
      setIsLoading(true);
      openTxWaitingModal();
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);

      const { hash } = await contract.addRewardToFluid();
      const receipt = await getTxReceipt(hash);
      console.log(receipt);

      changeModal(() =>
        openTxSuccessModal({
          txHash: hash,
        })
      );
    } catch (err) {
      console.log(err);
      changeModal(() => openTxFailedModal());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Text _2xl semibold>
        Add reward to Fluid staker
      </Text>

      <Spacing height={24}></Spacing>

      <Flex justify="between" wrap>
        <Text semibold>Total Staked Fluid</Text>
        <Text>{comma(stakedFluid)}</Text>
      </Flex>

      <Spacing height={64}></Spacing>

      <TxRunButton
        buttonText="Add reward"
        isLoading={isLoading}
        disabled={disableButton}
        onClick={addReward}
      ></TxRunButton>
    </Wrapper>
  );
};

export default AddReward;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
