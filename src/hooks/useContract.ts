import { waitForTransactionReceipt } from '@wagmi/core';
import { BrowserProvider, Contract, parseEther } from 'ethers';
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

const useContract = () => {
  // Approve
  const approve = async (address: string, spender: string, amount: string) => {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

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
    const provider = new BrowserProvider(window.ethereum);
    const contract = new Contract(FLUID_CONTRACT_ADDRESS, FluidABI, provider);
    return contract.totalStake();
  };

  return { approve, getTxReceipt, getTotalStakedFluid };
};

export default useContract;
