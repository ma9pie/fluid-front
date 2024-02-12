import { Contract, ethers, parseEther, Signer } from 'ethers';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

import BlastABI from '@/abis/Blast.json';
import FluidABI from '@/abis/Fluid.json';
import StGASABI from '@/abis/StGAS.json';
import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import Layout from '@/components/layout/Layout';
import {
  BLAST_CONTRACT_ADDRESS,
  BLAST_SEPOLIA_TESTNET,
  FLUID_CONTRACT_ADDRESS,
  ST_GAS_CONTRACT_ADDRESS,
} from '@/constants';
import usePageAccess from '@/hooks/usePageAccess';
import useWallet from '@/hooks/useWallet';

const Index = () => {
  const { account } = useWallet();
  const { isShow } = usePageAccess();

  const [stGASBalance, setStGASBalance] = useState<string>('plz update');
  const [fluidBalance, setFluidBalance] = useState<string>('plz update');
  const [stGASTotalSupply, setStGASTotalSupply] =
    useState<string>('plz update');
  const [fluidTotalSupply, setFluidTotalSupply] =
    useState<string>('plz update');
  const [stGASParams, setStGASParams] = useState<string>('plz update');

  const [stakeFluidAmountInputValue, setStakeFluidAmountInputValue] =
    useState('');

  // 입력 필드가 변경될 때마다 호출되는 함수
  const handleStakeFluidAmountInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStakeFluidAmountInputValue(event.target.value);
  };

  // [example 1] - totalSupply 조회
  const runExample1 = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, provider);
      const res = await contract.totalSupply();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // [example 2] - Fluid contract에  approve 하기
  const approveFluidToFluid = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
      const res = await contract.approve(
        signer.address,
        parseEther('100000000000000')
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // get FLuid token
  const runFluidFaucet = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
      const res = await contract.mint();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const runClaimReward = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
      const res = await contract.claim();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const runSetFluid = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);
      const res = await contract.setFluid(FLUID_CONTRACT_ADDRESS);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const runSetWhielistStGAS = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);
      const res = await contract.setWhitelist(ST_GAS_CONTRACT_ADDRESS);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const runAddRewardToFluid = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);
      const res = await contract.addRewardToFluid();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const runStakeFluid = async () => {
    // 숫자로 변환
    let amountInput = Number(stakeFluidAmountInputValue);
    let amountInputBigInt = BigInt(amountInput) * BigInt(1e18);
    // 변환된 숫자를 사용하는 로직을 여기에 구현
    console.log(amountInput); // 예시로 콘솔에 출력

    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
      const res = await contract.stake(amountInputBigInt);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getStGASParams = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(BLAST_CONTRACT_ADDRESS, BlastABI, signer);
      const gasParams = await contract.readGasParams(ST_GAS_CONTRACT_ADDRESS);
      const res = gasParams[1] / BigInt(1e10);
      const resProcessed = Number(res) / 1e8;
      setStGASParams(resProcessed.toString());
      console.log(gasParams);
    } catch (err) {
      console.log(err);
    }
  };

  const getStGASTotalSupply = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);
      const res = (await contract.totalSupply()) / BigInt(1e10);
      const resProcessed = Number(res) / 1e8;
      setStGASTotalSupply(resProcessed.toString());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getFluidTotalSupply = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
      const res = (await contract.totalSupply()) / BigInt(1e18);
      setFluidTotalSupply(res.toString());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getStGASBalance = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);
      const res = (await contract.balanceOf(signer.address)) / BigInt(1e10);
      const resProcessed = Number(res) / 1e8;
      setStGASBalance(resProcessed.toString());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getFluidBalance = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
      const res = (await contract.balanceOf(signer.address)) / BigInt(1e18);
      setFluidBalance(res.toString());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  if (!isShow) return null;
  return (
    <Layout>
      <Flex col gap={16}>
        <div>stGAS gasParams</div>
        <div>{stGASParams}</div>
        <Button onClick={getStGASParams}> update stGAS Params</Button>

        <div>stGAS totalSupply</div>
        <div>{stGASTotalSupply}</div>
        <Button onClick={getStGASTotalSupply}> update stGAS totalSupply</Button>

        <div>Fluid totalSupply</div>
        <div>{fluidTotalSupply}</div>
        <Button onClick={getFluidTotalSupply}> update Fluid totalSupply</Button>

        <div>stGAS Balance</div>
        <div>{stGASBalance}</div>
        <Button onClick={getStGASBalance}> update stGAS Balance</Button>

        <div>Fluid Balance</div>
        <div>{fluidBalance}</div>
        <Button onClick={getFluidBalance}> update Fluid Balance</Button>

        <Button onClick={runFluidFaucet}>fluid faucet</Button>

        <input
          type="number" // 숫자만 입력받도록 설정
          value={stakeFluidAmountInputValue}
          onChange={handleStakeFluidAmountInputChange} // 입력이 변경될 때마다 handleInputChange 호출
        />
        <button onClick={runStakeFluid}>stake Fluid</button>

        <Button onClick={runClaimReward}>claim stGAS reward</Button>

        {/*<Button onClick={approveFluidToFluid}>approve Fluid to Fluid</Button>*/}
        <Button onClick={runAddRewardToFluid}>
          add reward to Fluid staker
        </Button>

        {/*<Button onClick={runSetWhielistStGAS}>set whitelist stGAS</Button>*/}
        {/*<Button onClick={runSetFluid}>set fluid contract in stGAS</Button>*/}
      </Flex>
    </Layout>
  );
};

export default Index;
