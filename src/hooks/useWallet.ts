import { useEffect, useMemo, useState } from 'react';
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
  const { chain, chainId, address } = useAccount();
  const { chains } = useConfig();
  const { switchChain } = useSwitchChain();

  const [account, setAccount] = useState<string | undefined>();

  const isConnected = useMemo(() => Boolean(account), [account]);
  const isInvalidChain = useMemo(() => {
    const idx = chains.findIndex((item) => item.id === chainId);
    return idx === -1 ? true : false;
  }, [chainId, chains]);
  const explorerUrl = useMemo(
    () => chain?.blockExplorers?.default.url,
    [chain]
  );

  useEffect(() => {
    setAccount(address);
  }, [address]);

  return {
    isConnected,
    isInvalidChain,
    account,
    chain,
    chains,
    chainId,
    connectors,
    error,
    explorerUrl,
    connect,
    disconnect,
    switchChain,
  };
};

export default useWallet;
