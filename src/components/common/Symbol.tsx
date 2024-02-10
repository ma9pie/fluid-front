import React from 'react';
import { MdOutlineToken } from 'react-icons/md';
import tw, { styled } from 'twin.macro';

import { Avatar } from '@/components/nextui';
import { Token } from '@/types';

interface Props {
  token?: Token;
}

const Symbol = ({ token }: Props) => {
  return (
    <Wrapper
      size="sm"
      isBordered
      src={token?.imgUrl || ''}
      fallback={<MdOutlineToken size={20}></MdOutlineToken>}
    ></Wrapper>
  );
};

export default Symbol;

const Wrapper = styled(Avatar)`
  ${tw`m-1`};
`;
