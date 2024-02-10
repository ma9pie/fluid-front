import { erc20Abi } from 'viem';
import { useReadContract } from 'wagmi';

import { CHAIN_ID } from '@/constants/chains';
import useWallet from '@/hooks/useWallet';

interface Props {
  contractAddress?: string;
  tokenAddress?: string;
}

const useAllowance = ({ contractAddress, tokenAddress }: Props) => {
  const { account } = useWallet();

  const { data: allowance, refetch } = useReadContract({
    chainId: CHAIN_ID,
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [account as `0x${string}`, contractAddress as `0x${string}`],
  });

  return { allowance, refetch };
};

export default useAllowance;
