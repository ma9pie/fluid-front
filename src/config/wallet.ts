import { createConfig, http } from 'wagmi';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

import { BLAST_SEPOLIA_TESTNET } from '@/constants';

export const wagmiConfig = createConfig({
  chains: [BLAST_SEPOLIA_TESTNET],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    }),
    coinbaseWallet({
      appName: 'fluid',
    }),
    injected(),
  ],
  transports: {
    [BLAST_SEPOLIA_TESTNET.id]: http(''),
  },
});
