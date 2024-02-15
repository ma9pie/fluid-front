import moment from 'moment';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '@/components/common/buttons/Button';
import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@/components/nextui';
import { STGAS } from '@/constants';
import useContract from '@/hooks/useContract';
import useTransaction from '@/hooks/useTransaction';
import useWallet from '@/hooks/useWallet';
import { comma, math } from '@/utils';

interface Position {
  id: number;
  address: string;
  date: string;
  amount: string;
  isClaimed: boolean;
  claimPercent: number;
}

const PositionList = () => {
  const { account } = useWallet();
  const { isLoading, runTx } = useTransaction();
  const { getUnstakingStGasPostionList, getStGasClaimedPerToken, claimStGas } =
    useContract();

  const [positionList, setPositionList] = useState<Position[]>([]);

  useEffect(() => {
    updatePositionList();
  }, [account]);

  // Position list 업데이트
  const updatePositionList = async () => {
    if (!account) return setPositionList([]);

    const [unstakeInfo, stGasClaimedPerToken] = await Promise.all([
      getUnstakingStGasPostionList(account),
      getStGasClaimedPerToken(),
    ]);

    const _positionList = unstakeInfo.map((item: any) => {
      const {
        index,
        user,
        unstakeTime,
        amount,
        gasClaimedPerToken,
        isClaimed,
      } = item;

      const claimPercent = math(stGasClaimedPerToken)
        .sub(gasClaimedPerToken)
        .div(1e18)
        .mul(100)
        .toNumber();

      return {
        id: Number(index),
        address: user,
        date: moment(Number(unstakeTime) * 1000).format('MMM DD, YYYY HH:mm'),
        amount: STGAS.format(amount),
        isClaimed,
        claimPercent,
      };
    });

    setPositionList(_positionList);
  };

  // Claim
  const handleClick = (id: number, amount: string) => {
    const index = BigInt(id);
    const parsedAmount = STGAS.parse(amount);
    runTx({
      txFn: () => claimStGas(index, parsedAmount),
    });
  };

  return (
    <Wrapper>
      <Table aria-label="position-list">
        <TableHeader>
          <TableColumn width="30%">Date</TableColumn>
          <TableColumn width="10%">Id</TableColumn>
          <TableColumn width="20%">
            <End>Amount</End>
          </TableColumn>
          <TableColumn width="30%">
            <Center>Progress</Center>
          </TableColumn>
          <TableColumn width="10%">
            <Center>Claim</Center>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {positionList.map(({ id, date, amount, isClaimed, claimPercent }) => (
            <TableRow key={id}>
              <TableCell>{date}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>
                <End>{`${comma(amount)} ${STGAS.symbol}`}</End>
              </TableCell>
              <TableCell>
                <Progress
                  aria-label="claim-progress"
                  value={claimPercent}
                  showValueLabel={true}
                  classNames={{
                    indicator: 'bg-gradient-to-r from-red-500 to-yellow-500',
                    value: 'text-foreground/60',
                  }}
                ></Progress>
              </TableCell>
              <TableCell>
                <Center>
                  <Button
                    disabled={isClaimed || claimPercent < 100 || isLoading}
                    onClick={() => handleClick(id, amount)}
                  >
                    Claim
                  </Button>
                </Center>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default PositionList;

const Wrapper = styled.div`
  ${tw`max-w-7xl mx-auto w-full`};
`;
const Center = styled.div`
  ${tw`flex justify-center`};
`;
const End = styled.div`
  ${tw`flex justify-end`};
`;
