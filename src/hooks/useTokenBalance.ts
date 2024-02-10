import { formatUnits } from 'ethers';
import { useEffect, useState } from 'react';
import { useBalance } from 'wagmi';

import { CHAIN_ID } from '@/constants';
import useWallet from '@/hooks/useWallet';
import { Token } from '@/types';

interface Props {
  token?: Token;
}

const useTokenBalance = ({ token }: Props) => {
  const { account } = useWallet();

  const [balance, setBalance] = useState('0');

  const tokenAddress = token?.isNativeToken ? undefined : token?.address;

  const { data, refetch } = useBalance({
    chainId: CHAIN_ID,
    address: account as `0x${string}`,
    token: tokenAddress as `0x${string}`,
  });

  useEffect(() => {
    if (!data) return setBalance('0');
    setBalance(formatUnits(data.value, token?.decimals));
  }, [token, data]);

  return { balance, refetch };
};

export default useTokenBalance;
