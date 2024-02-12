import { Contract } from 'ethers';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import FluidABI from '@/abis/Fluid.json';
import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { FLUID_CONTRACT_ADDRESS, STGAS } from '@/constants';
import useContract from '@/hooks/useContract';
import useEthers from '@/hooks/useEthers';
import useModal from '@/hooks/useModal';
import useTokenBalance from '@/hooks/useTokenBalance';
import useWallet from '@/hooks/useWallet';
import { comma } from '@/utils';

const ClaimReward = () => {
  const { account } = useWallet();
  const { signer } = useEthers();
  const { getTxReceipt } = useContract();
  const { balance: stGASBalance, refetch: refetchStGASBalance } =
    useTokenBalance({
      token: STGAS,
    });
  const {
    openTxSuccessModal,
    openTxFailedModal,
    openTxWaitingModal,
    changeModal,
  } = useModal();

  const [isLoading, setIsLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  // 버튼 활성화 여부
  useEffect(() => {
    if (isLoading || !account) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [isLoading, account]);

  // Claim reward
  const claimReward = async () => {
    try {
      if (!account) return;
      setIsLoading(true);
      openTxWaitingModal();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);

      const { hash } = await contract.claim();
      const receipt = await getTxReceipt(hash);
      console.log(receipt);

      changeModal(() =>
        openTxSuccessModal({
          txHash: hash,
        })
      );
      refetchStGASBalance();
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
        Claim reward
      </Text>

      <Spacing height={24}></Spacing>

      <Flex justify="between" wrap>
        <Text semibold>Current stGAS</Text>
        <Text>{account ? comma(stGASBalance) : '-'}</Text>
      </Flex>

      <Spacing height={64}></Spacing>

      <TxRunButton
        buttonText="Claim reward"
        isLoading={isLoading}
        disabled={disableButton}
        onClick={claimReward}
      ></TxRunButton>
    </Wrapper>
  );
};

export default ClaimReward;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
