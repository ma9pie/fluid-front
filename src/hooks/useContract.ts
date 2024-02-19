import { waitForTransactionReceipt } from '@wagmi/core';
import { Contract, parseEther, Provider, Signer } from 'ethers';
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

const useContract = () => {
  const { provider, signer } = useEthers();

  const fluidContract = (runner: Provider | Signer | null = provider) => {
    if (!runner) return null;
    return new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, runner);
  };

  const stGasContract = (runner: Provider | Signer | null = provider) => {
    if (!runner) return null;
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
    const contract = fluidContract();
    if (!contract) return;
    return contract.totalStake();
  };

  // Unstaking중인 stGAS position list 조회
  const getUnstakingStGasPostionList = (address: string) => {
    const contract = stGasContract();
    if (!contract) return;
    return contract.getUnstakeInfo(address);
  };

  // Staking중인 Fluid를 claim해서 얻을 수 있는 stGAS 조회
  const getAmountOfStGasReward = (address: string) => {
    const contract = fluidContract();
    if (!contract) return;
    return contract.getAmountReward(address);
  };

  // 토큰당 claimed된 stGAS 수량 조회
  const getStGasClaimedPerToken = () => {
    const contract = stGasContract();
    if (!contract) return;
    return contract.gasClaimedPerToken();
  };

  /** @signer */
  // Add reward
  const addReward = async () => {
    const contract = stGasContract(signer);
    if (!contract) return;
    return contract.addRewardToFluid();
  };

  // Claim fluid
  const claimFluid = async () => {
    const contract = fluidContract(signer);
    if (!contract) return;
    return contract.claim();
  };

  // Faucet fluid
  const faucetFluid = async () => {
    const contract = fluidContract(signer);
    if (!contract) return;
    return contract.mint();
  };

  // Stake fluid
  const stakeFluid = async (amount: BigInt) => {
    const contract = fluidContract(signer);
    if (!contract) return;
    return contract.stake(amount);
  };

  // Unstake stGAS
  const unstakeStGas = async (amount: BigInt) => {
    const contract = stGasContract(signer);
    if (!contract) return;
    return contract.unstake(amount);
  };

  // Unstaking stGAS를 즉시 claim할 수 있는 어드민 함수
  const distributeStGasToStaker = async (amount: BigInt) => {
    const contract = stGasContract(signer);
    if (!contract) return;
    return contract.distributeGasToStaker(amount, {
      value: amount,
    });
  };

  // Claim stGAS
  const claimStGas = async (index: BigInt) => {
    const contract = stGasContract(signer);
    if (!contract) return;
    return contract.claim(index, 0);
  };

  return {
    approve,
    getTxReceipt,
    getTotalStakedFluid,
    getUnstakingStGasPostionList,
    getAmountOfStGasReward,
    getStGasClaimedPerToken,

    addReward,
    claimFluid,
    faucetFluid,
    stakeFluid,
    unstakeStGas,
    distributeStGasToStaker,
    claimStGas,
  };
};

export default useContract;
