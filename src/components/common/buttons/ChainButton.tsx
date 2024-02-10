import React, { useEffect, useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import tw, { styled } from 'twin.macro';
import { mainnet } from 'wagmi/chains';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import { blastSepoliaTestnet } from '@/constants';
import useWallet from '@/hooks/useWallet';

const ChainButton = () => {
  const { account, chain, chains, switchNetwork } = useWallet();

  const [chainName, setChainName] = useState('');

  const id = chain?.id;

  useEffect(() => {
    const currentChain = chains.find((item) => item.id === id);

    if (currentChain) {
      setChainName(currentChain.name);
    } else {
      setChainName('');
    }
  }, [id]);

  if (!account) return null;
  return (
    <Wrapper>
      {chainName ? (
        <>{chainName}</>
      ) : (
        <Flex
          items="center"
          gap={4}
          onClick={() => switchNetwork?.(blastSepoliaTestnet.id)}
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
