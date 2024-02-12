import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
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
  const { claimReward } = useContract();
  const { balance: stGASBalance, refetch: refetchStGASBalance } =
    useTokenBalance({
      token: STGAS,
    });

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
  const handleClick = () => {
    runTx({
      txFn: () => claimReward(),
      onAfterTx: () => {
        refetchStGASBalance();
      },
    });
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
        onClick={handleClick}
      ></TxRunButton>
    </Wrapper>
  );
};

export default ClaimReward;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
