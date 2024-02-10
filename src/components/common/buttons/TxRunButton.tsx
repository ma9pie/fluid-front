import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import Text from '@/components/common/Flex';
import { Spinner } from '@/components/nextui';
import { CHAIN_ID } from '@/constants';
import useModal from '@/hooks/useModal';
import useWallet from '@/hooks/useWallet';

interface Props {
  buttonText: string;
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const TxRunButton = ({ buttonText, isLoading, disabled, onClick }: Props) => {
  const { isConnected, isInvalidChain, switchChain } = useWallet();
  const { openConnectWalletModal } = useModal();

  // 지갑 미연결 시
  if (!isConnected) {
    return (
      <Button full onClick={() => openConnectWalletModal()}>
        <Text>Connect Wallet</Text>
      </Button>
    );
  }

  // 잘못된 체인 연결 시
  if (isInvalidChain) {
    return (
      <Button full onClick={() => switchChain({ chainId: CHAIN_ID })}>
        <Text>Switch Chain</Text>
      </Button>
    );
  }

  return (
    <Button full disabled={disabled} onClick={onClick}>
      <Flex justify="center" items="center" gap={8}>
        {isLoading && <Spinner size="sm"></Spinner>}
        <Text>{buttonText}</Text>
      </Flex>
    </Button>
  );
};

export default TxRunButton;
