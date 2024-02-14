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
  ${tw`flex justify-between items-center flex-wrap h-12 border-t border-solid`};
  ${tw`px-4`};
  ${tw`md:px-6`};
  ${tw`border-neutral-100`};
  ${tw`dark:border-neutral-900`};
`;
const Text = styled.p`
  ${tw`text-sm text-neutral-500 font-medium`};
`;
const IconWrapper = styled(Link)`
  ${tw``};
`;
