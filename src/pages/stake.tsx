import { Contract, ethers, parseEther } from 'ethers';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import FluidABI from '@/abis/Fluid.json';
import Button from '@/components/common/buttons/Button';
import TokenAmountInput from '@/components/common/inputs/TokenAmountInput';
import Spacing from '@/components/common/Spacing';
import Layout from '@/components/layout/Layout';
import { Card, Slider } from '@/components/nextui';
import { FLUID_CONTRACT_ADDRESS } from '@/constants';
import { FLUID } from '@/constants';
import useTokenBalance from '@/hooks/useTokenBalance';
import useWallet from '@/hooks/useWallet';
import { math } from '@/utils';

const Stake = () => {
  const { account } = useWallet();
  const balance = useTokenBalance({
    token: FLUID,
  });

  const [amount, setAmount] = useState('');
  const [percent, setPercent] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  // 지갑 미연결 시
  useEffect(() => {
    if (!account) resetInputs();
    setDisableInput(!Boolean(account));
  }, [account]);

  // 버튼 활성화 여부
  useEffect(() => {
    if (!account || math(amount).eq(0)) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [account, amount]);

  // Input 입력 관리
  const handleChangeInput = (value: string) => {
    const _percent =
      Number(value) > Number(balance)
        ? 100
        : math(value).div(balance).mul(100).toNumber();
    setAmount(value);
    setPercent(_percent);
  };

  // Slider 입력 관리
  const handleChangeSlider = (value: number | number[]) => {
    if (typeof value === 'object') return;
    const _amount = math(balance).mul(value).div(100).value();
    setAmount(_amount);
    setPercent(value);
  };

  // 입력값 초기화
  const resetInputs = () => {
    setAmount('');
    setPercent(0);
  };

  // Stake
  const stake = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const parsedAmount = parseEther(amount);
      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);

      const res = await contract.stake(parsedAmount);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Container>
        <Title>Stake Fluid</Title>

        <Spacing height={24}></Spacing>

        <TokenAmountInput
          token={FLUID}
          amount={amount}
          balance={balance}
          disabled={disableInput}
          onChange={handleChangeInput}
        ></TokenAmountInput>

        <Spacing height={16}></Spacing>

        <Slider
          color="foreground"
          aria-label="stake-fluid"
          step={1}
          maxValue={100}
          minValue={0}
          defaultValue={0}
          value={percent}
          isDisabled={disableInput}
          onChange={handleChangeSlider}
        ></Slider>

        <Spacing height={64}></Spacing>

        <Button full color="default" disabled={disableButton} onClick={stake}>
          Stake
        </Button>
      </Container>
    </Layout>
  );
};

export default Stake;

const Container = styled(Card)`
  ${tw`flex flex-col w-full max-w-[640px] p-6 mx-auto`};
`;
const Title = styled.p`
  ${tw`text-2xl font-semibold`};
`;
