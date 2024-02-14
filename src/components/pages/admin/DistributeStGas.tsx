import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import NumberInput from '@/components/common/inputs/NumberInput';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card } from '@/components/nextui';
import { STGAS } from '@/constants';
import useContract from '@/hooks/useContract';
import useTransaction from '@/hooks/useTransaction';
import useWallet from '@/hooks/useWallet';
import { math } from '@/utils';

const DistributeStGas = () => {
  const { account } = useWallet();
  const { isLoading, runTx } = useTransaction();
  const { distributeStGasToStaker } = useContract();

  const [amount, setAmount] = useState('');
  const [disableInput, setDisableInput] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  // 지갑 미연결 시
  useEffect(() => {
    if (!account) resetInputs();
    setDisableInput(!Boolean(account));
  }, [account]);

  // 버튼 활성화 여부
  useEffect(() => {
    if (isLoading || !account || math(amount).eq(0)) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [isLoading, account, amount]);

  // Input 상태 관리
  const handleChangeInput = (value: string) => {
    setAmount(value);
  };

  // 입력값 초기화
  const resetInputs = () => {
    setAmount('');
  };

  // Distribute
  const handleClick = () => {
    const parsedAmount = STGAS.parse(amount);
    runTx({
      txFn: () => distributeStGasToStaker(parsedAmount),
      onAfterTx: () => {
        resetInputs();
      },
    });
  };

  return (
    <Wrapper>
      <Text _2xl semibold>
        Distribute stGAS to staker
      </Text>

      <Spacing height={24}></Spacing>

      <NumberInput
        placeholder="Amount"
        value={amount}
        disabled={disableInput}
        onChange={handleChangeInput}
      ></NumberInput>

      <Spacing height={64}></Spacing>

      <TxRunButton
        buttonText="Distribute"
        isLoading={isLoading}
        disabled={disableButton}
        onClick={handleClick}
      ></TxRunButton>
    </Wrapper>
  );
};

export default DistributeStGas;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
