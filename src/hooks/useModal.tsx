import { useCallback, useContext } from 'react';

import { ModalContext } from '@/components/providers/ModalProvider';
import { ModalProps, Modals } from '@/types';

let tmpModals: Modals;
const DELAY = 100; // modal unmount delay

const useModal = () => {
  const { modals, setModals } = useContext(ModalContext);
  tmpModals = modals;

  const createUid = useCallback(() => {
    if (typeof window !== undefined && window.crypto) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return array[0].toString(36);
    } else {
      return Math.random().toString(36).substring(2, 9);
    }
  }, []);

  const openModal = (props: ModalProps) => {
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
  };

  const closeModal = (id?: string) => {
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
  };

  // 모달 변경
  const changeModal = (callback: () => void) => {
    closeModal();
    setTimeout(() => {
      callback();
    }, DELAY);
  };

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

  return {
    openModal,
    closeModal,
    changeModal,
  };
};

export default useModal;
