import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Symbol from '@/components/common/Symbol';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { STGAS } from '@/constants';
import useContract from '@/hooks/useContract';
import useTokenBalance from '@/hooks/useTokenBalance';
import useTransaction from '@/hooks/useTransaction';
import useWallet from '@/hooks/useWallet';
import { comma } from '@/utils';

const ClaimReward = () => {
  const { account } = useWallet();
  const { isLoading, runTx } = useTransaction();
  const { claimFluid, getAmountOfStGasReward } = useContract();
  const { balance: stGasBalance, refetch: refetchStGasBalance } =
    useTokenBalance({
      token: STGAS,
    });

  const [disableButton, setDisableButton] = useState(false);
  const [receiveAmount, setReceiveAmount] = useState('');

  useEffect(() => {
    updateReceiveAmount();
  }, [account]);

  // 버튼 활성화 여부
  useEffect(() => {
    if (isLoading || !account) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [isLoading, account]);

  // Update ReceiveAmount
  const updateReceiveAmount = async () => {
    if (!account) return setReceiveAmount('');
    const amount = await getAmountOfStGasReward(account);
    setReceiveAmount(STGAS.format(amount));
  };

  // Claim reward
  const handleClick = () => {
    runTx({
      txFn: () => claimFluid(),
      onAfterTx: () => {
        refetchStGasBalance();
        updateReceiveAmount();
      },
      successMsg: `you receive ${comma(receiveAmount)} ${STGAS.symbol}`,
    });
  };

  return (
    <Wrapper>
      <Text _2xl semibold>
        Claim reward
      </Text>

      <Spacing height={24}></Spacing>

      <Flex justify="between" wrap>
        <Flex items="center" gap={8}>
          <Symbol token={STGAS}></Symbol>
          <Text semibold>{STGAS.symbol}</Text>
        </Flex>
        <Text>{account ? comma(stGasBalance) : '-'}</Text>
      </Flex>

      <Spacing height={24}></Spacing>

      <Flex justify="between" wrap>
        <Text semibold>you will receive</Text>
        <Text>{account ? `${comma(receiveAmount)} ${STGAS.symbol}` : '-'}</Text>
      </Flex>

      <Spacing height={64}></Spacing>

      <TxRunButton
        buttonText="Claim reward"
        isLoading={isLoading}
        disabled={disableButton}
        onClick={handleClick}
      ></TxRunButton>
    </Wrapper>
  );
};

export default ClaimReward;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
