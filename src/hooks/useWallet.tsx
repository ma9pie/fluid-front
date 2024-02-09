import React, { useCallback, useEffect, useState } from 'react';
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi';

import ConnectWalletModal from '@/components/modals/wallet/ConnectWalletModal';
import useModal from '@/hooks/useModal';

const useWallet = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const {} = useBalance({ address: address });
  const { chain, chains } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { openModal } = useModal();

  const [account, setAccount] = useState<string | undefined>();

  useEffect(() => {
    setAccount(address);
  }, [address]);

  const openConnectWalletModal = useCallback(() => {
    openModal({
      title: 'Connect Wallet',
      component: () => <ConnectWalletModal></ConnectWalletModal>,
    });
  }, [openModal]);

  return {
    account,
    chain,
    chains,
    connectors,
    pendingConnector,
    error,
    isLoading,
    connect,
    disconnect,
    switchNetwork,
    openConnectWalletModal,
  };
};

export default useWallet;
