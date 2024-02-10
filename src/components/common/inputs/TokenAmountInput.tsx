import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import NumberInput from '@/components/common/inputs/NumberInput';
import Symbol from '@/components/common/Symbol';
import Text from '@/components/common/Text';
import useWallet from '@/hooks/useWallet';
import { Token } from '@/types';
import { comma } from '@/utils';

interface Props {
  className?: string;
  token?: Token;
  amount: string;
  balance?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const TokenAmountInput = ({
  className,
  token,
  amount,
  balance,
  disabled,
  onChange,
}: Props) => {
  const { account } = useWallet();

  return (
    <Container>
      <Flex justify="between" items="center">
        <Flex gap={6} items="center">
          <Symbol token={token}></Symbol>
          <Text semibold sm>
            {token?.symbol}
          </Text>
        </Flex>
        <Text neutral500>{`balance : ${account ? comma(balance) : '-'}`}</Text>
      </Flex>

      <NumberInput
        className={className}
        label="Amount"
        disabled={disabled}
        maxDecimals={token?.decimals}
        value={amount}
        onChange={onChange}
      ></NumberInput>
    </Container>
  );
};

export default TokenAmountInput;

const Container = styled.div`
  ${tw`flex flex-col gap-4`};
`;
