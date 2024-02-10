import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
import Flex from '@/components/common/Flex';
import { Spinner } from '@/components/nextui';
import useWallet from '@/hooks/useWallet';

interface Props {
  isInvalidAmount: boolean;
  isNeedApprove0: boolean;
  isNeedApprove1: boolean;
  approve0IsLoading: boolean;
  approve1IsLoading: boolean;
  onClick: () => void;
}

const ApproveButton = ({
  isInvalidAmount,
  isNeedApprove0,
  isNeedApprove1,
  approve0IsLoading,
  approve1IsLoading,
  onClick,
}: Props) => {
  const { isConnected, isInvalidChain } = useWallet();

  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  // Approve 버튼 표시 여부
  useEffect(() => {
    const isNeedApprove = isNeedApprove0 || isNeedApprove1;
    setIsShow(
      !isInvalidAmount && isNeedApprove && isConnected && !isInvalidChain
    );
  }, [
    isInvalidAmount,
    isNeedApprove0,
    isNeedApprove1,
    isConnected,
    isInvalidChain,
  ]);

  // Approve 해야할 할 토큰 개수 & 버튼 활성화 여부
  useEffect(() => {
    let _count = 0;
    if (isNeedApprove0) _count++;
    if (isNeedApprove1) _count++;
    setCount(_count);
    setIsLoading(approve0IsLoading || approve1IsLoading);
  }, [isNeedApprove0, isNeedApprove1, approve0IsLoading, approve1IsLoading]);

  if (!isShow) return;

  return (
    <Button color="primary" onClick={() => !isLoading && onClick()}>
      <Flex justify="center" items="center" gap={8}>
        {isLoading && <Spinner></Spinner>}
        <Text>{isLoading ? 'Approving' : `Approve (${count})`}</Text>
      </Flex>
    </Button>
  );
};

export default ApproveButton;

const Text = styled.p`
  ${tw`text-white`};
`;
