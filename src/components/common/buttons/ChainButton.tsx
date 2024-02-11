import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import { CHAIN_ID } from '@/constants';
import useWallet from '@/hooks/useWallet';

const ChainButton = () => {
  const { isInvalidChain, account, chain, switchChain } = useWallet();

  if (!account) return null;
  return (
    <Wrapper>
      {chain && !isInvalidChain ? (
        <Text>{chain.name}</Text>
      ) : (
        <Box onClick={() => switchChain({ chainId: CHAIN_ID })}>
          <IoWarningOutline size={24}></IoWarningOutline>
          <Text nowrap>Invalid network</Text>
        </Box>
      )}
    </Wrapper>
  );
};

export default ChainButton;

const Wrapper = styled.div`
  ${tw`w-fit border-2 border-solid rounded-lg px-2 py-1 select-none`};
`;
const Box = styled.div`
  ${tw`flex items-center gap-1 cursor-pointer`};
`;
