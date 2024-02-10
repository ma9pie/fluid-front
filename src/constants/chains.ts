export const CHAIN_ID = 168587773;
export const BLAST_SEPOLIA_TESTNET = {
  id: 168587773,
  name: 'Blast Sepolia Testnet',
  network: 'Blast Sepolia Testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://sepolia.blast.io'],
    },
    public: {
      http: ['https://sepolia.blast.io'],
    },
  },
  blockExplorers: {
    default: { name: 'Blastscan', url: 'https://testnet.blastscan.io/' },
  },
  contracts: {},
};
