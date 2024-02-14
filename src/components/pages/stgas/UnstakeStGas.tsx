import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import TxRunButton from '@/components/common/buttons/TxRunButton';
import TokenAmountInput from '@/components/common/inputs/TokenAmountInput';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import { Card, Slider } from '@/components/nextui';
import { STGAS } from '@/constants';
import useContract from '@/hooks/useContract';
import useTokenBalance from '@/hooks/useTokenBalance';
import useTransaction from '@/hooks/useTransaction';
import useWallet from '@/hooks/useWallet';
import { math } from '@/utils';

const UnstakeStGas = () => {
  const { account } = useWallet();
  const { isLoading, runTx } = useTransaction();
  const { unstakeStGas } = useContract();
  const { balance: stGASBalance, refetch: refetchStGASBalance } =
    useTokenBalance({
      token: STGAS,
    });

  const [amount, setAmount] = useState('');
  const [percent, setPercent] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState('');

  // 지갑 미연결 시
  useEffect(() => {
    if (!account) resetInputs();
    setDisableInput(!Boolean(account));
  }, [account]);

  // 버튼 활성화 여부
  useEffect(() => {
    if (
      isLoading ||
      !account ||
      math(amount).eq(0) ||
      math(amount).gt(stGASBalance)
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [isLoading, account, amount, stGASBalance]);

  // 버튼 텍스트 관리
  useEffect(() => {
    if (math(amount).gt(stGASBalance)) {
      setButtonText('Invalid amount');
    } else {
      setButtonText('Unstake');
    }
  }, [amount, stGASBalance]);

  // Input 상태 관리
  const handleChangeInput = (value: string) => {
    const _percent =
      Number(value) > Number(stGASBalance)
        ? 100
        : math(value).div(stGASBalance).mul(100).toNumber();
    setAmount(value);
    setPercent(_percent);
  };

  // Slider 상태 관리
  const handleChangeSlider = (value: number | number[]) => {
    if (typeof value === 'object') return;
    const _amount = math(stGASBalance).mul(value).div(100).value();
    setAmount(_amount);
    setPercent(value);
  };

  // 입력값 초기화
  const resetInputs = () => {
    setAmount('');
    setPercent(0);
  };

  // Stake
  const handleClick = () => {
    const parsedAmount = STGAS.parse(amount);
    runTx({
      txFn: () => unstakeStGas(parsedAmount),
      onAfterTx: () => {
        refetchStGASBalance();
        resetInputs();
      },
    });
  };

  return (
    <Wrapper>
      <Text _2xl semibold>
        Unstake stGAS
      </Text>

      <Spacing height={24}></Spacing>

      <TokenAmountInput
        token={STGAS}
        amount={amount}
        balance={stGASBalance}
        disabled={disableInput}
        onChange={handleChangeInput}
      ></TokenAmountInput>

      <Spacing height={16}></Spacing>

      <Slider
        color="foreground"
        aria-label="unstake-stGAS"
        step={1}
        maxValue={100}
        minValue={0}
        defaultValue={0}
        value={percent}
        isDisabled={disableInput}
        onChange={handleChangeSlider}
      ></Slider>

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

export default UnstakeStGas;

const Wrapper = styled(Card)`
  ${tw`p-6`};
`;
