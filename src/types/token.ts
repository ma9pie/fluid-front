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
}
