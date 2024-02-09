import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import tw, { styled } from 'twin.macro';

interface Props {
  href: string;
  title: string;
  desc: string;
}

const LinkBox = ({ href, title, desc }: Props) => {
  if (!href) return null;

  return (
    <Wrapper className="group">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <TitleBox>
          <Title>{title}</Title>
          <IconWrapper>
            <FaAngleRight size={24}></FaAngleRight>
          </IconWrapper>
        </TitleBox>
        <Desc>{desc}</Desc>
      </Link>
    </Wrapper>
  );
};

export default LinkBox;

const Wrapper = styled.div`
  ${tw`rounded-lg border border-transparent px-5 py-4 transition-colors`};
  &:hover {
    ${tw`border-gray-300 bg-gray-100`};
    ${tw`dark:(border-neutral-700 bg-neutral-800/30)`};
  }
`;
const TitleBox = styled.div`
  ${tw`flex items-center gap-2 mb-3`};
`;
const Title = styled.h2`
  ${tw`text-2xl font-semibold`};
`;
const Desc = styled.p`
  ${tw`m-0 max-w-[30ch] text-sm opacity-50`};
`;
const IconWrapper = styled.span`
  ${tw`inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`};
`;
