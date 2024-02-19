import {
  BrowserProvider,
  FallbackProvider,
  JsonRpcProvider,
  JsonRpcSigner,
} from 'ethers';
import { useMemo } from 'react';
import type { Account, Chain, Client, Transport } from 'viem';
import { type Config, useClient, useConnectorClient } from 'wagmi';

import { CHAIN_ID } from '@/constants';

const clientToProvider = (client: Client<Transport, Chain>) => {
  if (!client) return null;
  const { chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback') {
    const providers = (transport.transports as ReturnType<Transport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network)
    );
    if (providers.length === 1) return providers[0];
    return new FallbackProvider(providers);
  }
  return new JsonRpcProvider(transport.url, network);
};

const clientToSigner = (client: Client<Transport, Chain, Account>) => {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
};

const useEthers = () => {
  const client: any = useClient<Config>({ chainId: CHAIN_ID });
  const { data: connectorClient } = useConnectorClient<Config>({
    chainId: CHAIN_ID,
  });

  const provider = useMemo(() => clientToProvider(client), [client]);
  const signer = useMemo(
    () => (connectorClient ? clientToSigner(connectorClient) : undefined),
    [connectorClient]
  );
  return { provider, signer };
};

export default useEthers;
