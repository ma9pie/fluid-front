import { waitForTransactionReceipt } from '@wagmi/core';
import { Contract, parseEther } from 'ethers';
import { erc20Abi } from 'viem';

import BlastABI from '@/abis/Blast.json';
import FluidABI from '@/abis/Fluid.json';
import StGASABI from '@/abis/StGAS.json';
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

  // Approve
  const approve = async (address: string, spender: string, amount: string) => {
    const parsedAmount = parseEther(amount);
    const contract = new Contract(address, erc20Abi, signer);
    const tx = await contract.approve(spender, parsedAmount);
    console.log(tx);
  };

  // Tx receipt 조회
  const getTxReceipt = async (hash: `0x${string}`) => {
    return waitForTransactionReceipt(wagmiConfig, { hash });
  };

  // Staked된 Fluid amount 조회
  const getTotalStakedFluid = async () => {
    const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, provider);
    return contract.totalStake();
  };

  // Add reward
  const addReward = async () => {
    const contract = new Contract(ST_GAS_CONTRACT_ADDRESS, StGASABI, signer);
    return contract.addRewardToFluid();
  };

  // Claim reward
  const claimReward = async () => {
    const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
    return contract.claim();
  };

  // Faucet fluid
  const faucetFluid = async () => {
    const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
    return contract.mint();
  };

  // Stake fluid
  const stakeFluid = async (amount: BigInt) => {
    const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, signer);
    return contract.stake(amount);
  };

  return {
    approve,
    getTxReceipt,
    getTotalStakedFluid,

    addReward,
    claimReward,
    faucetFluid,
    stakeFluid,
  };
};

export default useContract;
