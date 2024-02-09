import { readContract, writeContract } from '@wagmi/core';
import { Contract, parseEther, Signer } from 'ethers';
import React from 'react';
import tw, { styled } from 'twin.macro';

import IERC20ABI from '@/abis/IERC20.json';
import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import Layout from '@/components/layout/Layout';
import { blastSepoliaTestnet } from '@/constants';
import useWallet from '@/hooks/useWallet';

const Index = () => {
  const { account } = useWallet();

  // [example 1] - call token balance
  const runExample1 = async () => {
    try {
      if (!account) return;

      const contractAddress = '???';

      const res = await readContract({
        chainId: blastSepoliaTestnet.id,
        address: contractAddress as `0x${string}`,
        abi: IERC20ABI,
        functionName: 'balanceOf',
        args: [account],
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // [example 2] - send deposit
  const runExample2 = async () => {
    try {
      if (!account) return;

      const tokenAddress = '???';
      const contractAddress = '???';

      const res = await writeContract({
        chainId: blastSepoliaTestnet.id,
        address: tokenAddress as `0x${string}`,
        abi: IERC20ABI,
        functionName: 'approve',
        args: [contractAddress, parseEther('0')],
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // 버튼 실행 로직을 구성해주세요.
  const handleClick = () => {};

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
