import { useCallback, useContext } from 'react';

import ConnectWalletModal from '@/components/modals/wallet/ConnectWalletModal';
import { ModalContext } from '@/components/providers/ModalProvider';
import { ModalProps, Modals } from '@/types';
import { createUid } from '@/utils';

let tmpModals: Modals;
const DELAY = 100; // modal unmount delay

const useModal = () => {
  const { modals, setModals } = useContext(ModalContext);
  tmpModals = modals;

  // 가장 최근의 modal id 조회
  const getRecentModalId = useCallback(() => {
    const hashMap: Map<string, ModalProps> = new Map(tmpModals);
    const arr = Array.from(hashMap.values()).sort(
      (a: ModalProps, b: ModalProps) => {
        const createdAtA = a.createdAt || 0;
        const createdAtB = b.createdAt || 0;
        return createdAtB - createdAtA;
      }
    );
    if (arr.length === 0) return null;
    return arr[0].id;
  }, []);

  const openModal = useCallback(
    (props: ModalProps) => {
      const hashMapA: Map<string, ModalProps> = new Map(tmpModals);
      // 중복 id open 방지
      if (props.id && hashMapA.has(props.id)) {
        return;
      }
      props.id = props.id || createUid();
      props.isOpen = true;
      props.createdAt = new Date().getTime();
      hashMapA.set(props.id, props);
      setModals(hashMapA);
    },
    [setModals]
  );

  const closeModal = useCallback(
    (id?: string) => {
      const hashMap: Map<string, ModalProps> = new Map(tmpModals);
      if (id) {
        const props = hashMap.get(id);
        if (props) {
          props.isOpen = false;
          hashMap.set(id, props);
          setModals(hashMap);
          setTimeout(() => {
            hashMap.delete(id);
            setModals(new Map(hashMap));
          }, DELAY);
        }
      }
      // id가 없을 경우 가장 최근에 띄워진 모달의 id로 closeModal 실행
      else {
        const _id = getRecentModalId();
        if (_id) closeModal(_id);
      }
    },
    [getRecentModalId, setModals]
  );

  // 모달 변경
  const changeModal = useCallback(
    (callback: () => void) => {
      closeModal();
      setTimeout(() => {
        callback();
      }, DELAY);
    },
    [closeModal]
  );

  // 지갑 연결 모달 open
  const openConnectWalletModal = useCallback(() => {
    openModal({
      title: 'Connect Wallet',
      component: () => <ConnectWalletModal></ConnectWalletModal>,
    });
  }, [openModal]);

  return {
    openModal,
    closeModal,
    changeModal,

    openConnectWalletModal,
  };
};

export default useModal;
