import styled from '@emotion/styled';
import React, { createContext, ReactNode, useState } from 'react';

import Modal from '@/components/modals/Modal';
import { ModalProps } from '@/types';

type Props = {
  children: ReactNode;
};

type Modals = Map<string, ModalProps>;

export const ModalContext = createContext({
  modals: new Map(),
  setModals: (state: Modals) => {},
});

const ModalProvider = ({ children }: Props) => {
  const [modals, setModals] = useState<Modals>(new Map());

  const modalList: ModalProps[] = [];

  modals.forEach((value) => {
    modalList.push(value);
  });

  return (
    <ModalContext.Provider value={{ modals, setModals }}>
      <Container id="modal-provider">
        {modalList.map((props) => (
          <div key={props.id}>
            <Modal {...props}></Modal>
          </div>
        ))}
      </Container>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

const Container = styled.div``;
