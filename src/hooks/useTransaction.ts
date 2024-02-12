import { useState } from 'react';

import useContract from '@/hooks/useContract';
import useModal from '@/hooks/useModal';
import useWallet from '@/hooks/useWallet';

interface RunTx {
  txFn: () => Promise<any>;
  onAfterTx?: () => void;
}

const useTransaction = () => {
  const { account } = useWallet();
  const { getTxReceipt } = useContract();
  const {
    openTxSuccessModal,
    openTxFailedModal,
    openTxWaitingModal,
    changeModal,
  } = useModal();

  const [isLoading, setIsLoading] = useState(false);

  const runTx = async ({ txFn, onAfterTx = () => {} }: RunTx) => {
    try {
      if (!account) return;
      setIsLoading(true);
      openTxWaitingModal();

      const { hash } = await txFn();
      const receipt = await getTxReceipt(hash);
      console.log(receipt);

      changeModal(() =>
        openTxSuccessModal({
          txHash: hash,
        })
      );
      onAfterTx();
    } catch (err) {
      console.log(err);
      changeModal(() => openTxFailedModal());
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, runTx };
};

export default useTransaction;
