import { waitForTransactionReceipt } from '@wagmi/core';
import { BrowserProvider, Contract, parseEther } from 'ethers';
import { erc20Abi } from 'viem';

import { wagmiConfig } from '@/config';

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

  return { approve, getTxReceipt };
};

export default useContract;
