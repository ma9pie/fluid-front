import React, { useEffect, useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import { BLAST_SEPOLIA_TESTNET } from '@/constants';
import useWallet from '@/hooks/useWallet';

const ChainButton = () => {
  const { account, chains, chainId, switchChain } = useWallet();

  const [chainName, setChainName] = useState('');

  // ChainName 설정
  useEffect(() => {
    const currentChain = chains.find((item) => item.id === chainId);
    if (currentChain) {
      setChainName(currentChain.name);
    } else {
      setChainName('');
    }
  }, [chainId, chains]);

  if (!account) return null;
  return (
    <Wrapper>
      {chainName ? (
        <>{chainName}</>
      ) : (
        <Flex
          items="center"
          gap={4}
          onClick={() => switchChain({ chainId: BLAST_SEPOLIA_TESTNET.id })}
        >
          <IoWarningOutline size={24}></IoWarningOutline>
          <Text nowrap>Invalid network</Text>
        </Flex>
      )}
    </Wrapper>
  );
};

export default ChainButton;

const Wrapper = styled.div`
  ${tw`w-fit border-2 border-solid rounded-lg px-2 py-1 cursor-pointer select-none`};
`;
