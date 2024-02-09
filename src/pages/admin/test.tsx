import { Contract, ethers, parseEther, Signer } from 'ethers';
import React from 'react';
import tw, { styled } from 'twin.macro';

import Fluid20ABI from '@/abis/Fluid.json';
import StGASABI from '@/abis/StGAS.json';
import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import Layout from '@/components/layout/Layout';
import {
  blastSepoliaTestnet,
  FLUID_CONTRACT_ADDRESS,
  ST_GAS_CONTRACT_ADDRESS,
} from '@/constants';
import useWallet from '@/hooks/useWallet';

const Index = () => {
  const { account } = useWallet();

  // [example 1] - totalSupply 조회
  const runExample1 = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const contract = new Contract(
        FLUID_CONTRACT_ADDRESS,
        Fluid20ABI,
        provider
      );
      const res = await contract.totalSupply();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // [example 2] - Fluid contract에  approve 하기
  const runExample2 = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, Fluid20ABI, signer);
      const res = await contract.approve(account, parseEther('0'));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // 버튼 실행 로직을 구성해주세요.
  const handleClick = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Flex col gap={16}>
        <Button onClick={runExample1}>example1</Button>
        <Button onClick={runExample2}>example2</Button>
        <Button onClick={handleClick}>Run</Button>
      </Flex>
    </Layout>
  );
};

export default Index;
