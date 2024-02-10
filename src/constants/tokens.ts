import { FLUID_CONTRACT_ADDRESS, ST_GAS_CONTRACT_ADDRESS } from '@/constants';
import { Token, TokenSymbol } from '@/types';

export const ETH = new Token({
  isNativeToken: true,
  symbol: TokenSymbol.ETH,
  address: '',
  decimals: 18,
  imgUrl: '/images/tokens/ETH.png',
});

export const FLUID = new Token({
  isNativeToken: false,
  symbol: TokenSymbol.Fluid,
  address: FLUID_CONTRACT_ADDRESS,
  decimals: 18,
  imgUrl: null,
});

export const STGAS = new Token({
  isNativeToken: false,
  symbol: TokenSymbol.StGAS,
  address: ST_GAS_CONTRACT_ADDRESS,
  decimals: 18,
  imgUrl: null,
});
