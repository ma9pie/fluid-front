import { waitForTransactionReceipt } from '@wagmi/core';
import { Contract, parseEther, Provider, Signer } from 'ethers';
import { useMemo } from 'react';
import { erc20Abi } from 'viem';

import BlastABI from '@/abis/Blast.json';
import FluidABI from '@/abis/Fluid.json';
import StGasABI from '@/abis/StGas.json';
import { wagmiConfig } from '@/config';
import {
  FLUID,
  FLUID_CONTRACT_ADDRESS,
  ST_GAS_CONTRACT_ADDRESS,
  STGAS,
} from '@/constants';
import useEthers from '@/hooks/useEthers';
import useWallet from '@/hooks/useWallet';

const useContract = () => {
  const { provider, signer } = useEthers();

  const fluidContract = (runner: Provider | Signer = provider) => {
    return new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, runner);
  };

  const stGasContract = (runner: Provider | Signer = provider) => {
    return new Contract(ST_GAS_CONTRACT_ADDRESS, StGasABI, runner);
  };

  // Approve
  const approve = async (address: string, spender: string, amount: string) => {
    const parsedAmount = parseEther(amount);
    const contract = new Contract(address, erc20Abi, signer);
    const tx = await contract.approve(spender, parsedAmount);
    console.log(tx);
  };

  /** @prodiver */
  // Tx receipt 조회
  const getTxReceipt = async (hash: `0x${string}`) => {
    return waitForTransactionReceipt(wagmiConfig, { hash });
  };

  // Staked된 Fluid amount 조회
  const getTotalStakedFluid = async () => {
    return fluidContract().totalStake();
  };

  // Unstaking중인 stGAS position list 조회
  const getUnstakingStGasPostionList = (address: string) => {
    return stGasContract().getUnstakeInfo(address);
  };

  // Staking중인 Fluid를 claim해서 얻을 수 있는 stGAS 조회
  const getAmountOfStGasReward = (address: string) => {
    return fluidContract().getAmountReward(address);
  };

  /** @signer */
  // Add reward
  const addReward = async () => {
    return stGasContract(signer).addRewardToFluid();
  };

  // Claim fluid
  const claimFluid = async () => {
    return fluidContract(signer).claim();
  };

  // Faucet fluid
  const faucetFluid = async () => {
    return fluidContract(signer).mint();
  };

  // Stake fluid
  const stakeFluid = async (amount: BigInt) => {
    return fluidContract(signer).stake(amount);
  };

  // Unstake stGAS
  const unstakeStGas = async (amount: BigInt) => {
    return stGasContract(signer).unstake(amount);
  };

  return {
    approve,
    getTxReceipt,
    getTotalStakedFluid,
    getUnstakingStGasPostionList,
    getAmountOfStGasReward,

    addReward,
    claimFluid,
    faucetFluid,
    stakeFluid,
    unstakeStGas,
  };
};

export default useContract;
