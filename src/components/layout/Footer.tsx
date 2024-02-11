import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import { DISCORD_URL, TWITTER_URL } from '@/constants';

const Footer = () => {
  return (
    <Wrapper>
      <Text>Ⓒ2024. Fluid Inc. All Rights Reserved.</Text>
      <Flex gap={16}>
        <IconWrapper href={TWITTER_URL} target="_blank">
          <FaXTwitter size={20} color="gray"></FaXTwitter>
        </IconWrapper>
        <IconWrapper href={DISCORD_URL} target="_blank">
          <FaDiscord size={20} color="gray"></FaDiscord>
        </IconWrapper>
      </Flex>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  ${tw`flex justify-between items-center h-12 px-6 border-t border-solid`};
  ${tw`border-neutral-100`};
  ${tw`dark:border-neutral-900`};
`;
const Text = styled.p`
  ${tw`text-sm font-medium`};
  ${tw`text-neutral-200`};
  ${tw`dark:text-neutral-600`};
`;
const IconWrapper = styled(Link)`
  ${tw``};
`;
