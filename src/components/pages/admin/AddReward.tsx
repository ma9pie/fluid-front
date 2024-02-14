import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { FLUID } from '@/constants';
import useContract from '@/hooks/useContract';
import useTransaction from '@/hooks/useTransaction';
import useWallet from '@/hooks/useWallet';
import { comma } from '@/utils';

const AddReward = () => {
  const { account } = useWallet();
  const { isLoading, runTx } = useTransaction();
  const { getTotalStakedFluid, addReward } = useContract();

  const [stakedFluid, setStakedFluid] = useState('0');
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
    setStakedFluid(FLUID.format(amount));
  };

  // Add reward
  const handleClick = () => {
    runTx({
      txFn: () => addReward(),
    });
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
        onClick={handleClick}
      ></TxRunButton>
    </Wrapper>
  );
};

export default AddReward;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
