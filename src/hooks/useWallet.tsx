import { useEffect, useState } from 'react';
import {
  useAccount,
  useConfig,
  useConnect,
  useDisconnect,
  useSwitchChain,
} from 'wagmi';

const useWallet = () => {
  const { connectors, error, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain, chainId, isConnected, address } = useAccount();
  const { chains } = useConfig();
  const { switchChain } = useSwitchChain();

  const [account, setAccount] = useState<string | undefined>();

  useEffect(() => {
    setAccount(address);
  }, [address]);

  return {
    isConnected,
    account,
    chain,
    chains,
    chainId,
    connectors,
    error,
    connect,
    disconnect,
    switchChain,
  };
};

export default useWallet;
