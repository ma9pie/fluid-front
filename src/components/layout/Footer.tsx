import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { SiGitbook } from 'react-icons/si';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import { DISCORD_URL, GITBOOK_URL, TWITTER_URL } from '@/constants';

const ICON_COLOR = '#808080';

const Footer = () => {
  return (
    <Wrapper>
      <Text>Ⓒ2024. Fluid protocol. All Rights Reserved.</Text>
      <Flex gap={32}>
        <IconWrapper href={GITBOOK_URL} target="_blank">
          <SiGitbook size={20} color={ICON_COLOR}></SiGitbook>
        </IconWrapper>
        <IconWrapper href={TWITTER_URL} target="_blank">
          <FaXTwitter size={20} color={ICON_COLOR}></FaXTwitter>
        </IconWrapper>
        {/* FIXME: 추후 링크 연동 */}
        {/* <IconWrapper href={DISCORD_URL} target="_blank">
          <FaDiscord size={20}  color={ICON_COLOR}></FaDiscord>
        </IconWrapper> */}
      </Flex>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  ${tw`flex justify-between items-center flex-wrap h-12 bg-[rgba(255,255,255,0.01)] backdrop-blur-[18px]`};
  ${tw`px-4`};
  ${tw`md:px-6`};
`;
const Text = styled.p`
  ${tw`text-sm text-neutral-500 font-medium`};
`;
const IconWrapper = styled(Link)`
  ${tw``};
`;
