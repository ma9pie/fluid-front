import React from 'react';
import { IoClose } from 'react-icons/io5';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import useModal from '@/hooks/useModal';

interface Props {
  title?: string;
}

const ModalHeader = ({ title }: Props) => {
  const { closeModal } = useModal();

  return (
    <Wrapper id="modal-header">
      <Text xl semibold>
        {title}
      </Text>
      <IconWrapper onClick={() => closeModal()}>
        <IoClose size={32}></IoClose>
      </IconWrapper>
    </Wrapper>
  );
};
export default React.memo(ModalHeader);

const Wrapper = styled.div`
  ${tw`flex justify-between items-center w-full mb-2 p-4`};
`;
const IconWrapper = styled.div`
  ${tw`cursor-pointer`};
`;
