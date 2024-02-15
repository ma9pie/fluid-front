export const CHAIN_ID = 168587773;
export const PUBLIC_RPC_URL = 'https://sepolia.blast.io';
export const PROJECT_RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
export const BLAST_SEPOLIA_TESTNET = {
  id: 168587773,
  name: 'Blast Sepolia Testnet',
  network: 'Blast Sepolia Testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [PROJECT_RPC_URL, PUBLIC_RPC_URL],
    },
    public: {
      http: [PROJECT_RPC_URL, PUBLIC_RPC_URL],
    },
  },
  blockExplorers: {
    default: { name: 'Blastscan', url: 'https://testnet.blastscan.io/' },
  },
  contracts: {},
};
