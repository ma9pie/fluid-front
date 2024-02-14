import { BigNumberish, formatUnits, parseUnits } from 'ethers';

interface TokenData {
  isNativeToken: boolean;
  symbol: string;
  address: string;
  decimals: number;
  imgUrl: string | null;
}

export enum TokenSymbol {
  ETH = 'ETH',
  Fluid = 'Fluid',
  StGAS = 'stGAS',
}

export class Token implements TokenData {
  isNativeToken = false;
  symbol = '';
  address = '';
  decimals = 0;
  imgUrl = null;

  constructor(data: TokenData) {
    Object.assign(this, data);
  }

  // Parsing
  parse = (amount: string | number) => {
    if (amount && !isNaN(+amount)) {
      const { decimals } = this;
      const _amount = floor(amount, decimals);
      return parseUnits(_amount, decimals);
    } else {
      return BigInt(0);
    }
  };

  // Formatting
  format = (amount: BigNumberish) => {
    if (amount) {
      return formatUnits(amount, this.decimals);
    } else {
      return '0';
    }
  };
}
