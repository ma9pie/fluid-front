import React from 'react';
import tw, { styled } from 'twin.macro';

import ModalHeader from '@/components/modals/ModalHeader';
import { Modal, ModalBody, ModalContent } from '@/components/nextui';
import useModal from '@/hooks/useModal';
import { ModalProps } from '@/types';

const Component = (props: ModalProps) => {
  const { closeModal } = useModal();
  const { isOpen, isDismissable, size, title, component } = props;

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        size={size}
        backdrop="blur"
        hideCloseButton
        isDismissable={isDismissable}
        onClose={closeModal}
      >
        <ModalContent>
          <ModalHeader title={title}></ModalHeader>
          <ModalBody className="px-4 pt-0 pb-8">
            {component && component()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  ${tw`relative`};
`;
