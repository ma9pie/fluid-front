import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

import {
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@/components/nextui';
import useContract from '@/hooks/useContract';
import useWallet from '@/hooks/useWallet';

const MOCK_DATA = [{ id: 1, unstakeTime: 0, amount: 0.001 }];

const PositionList = () => {
  const { account } = useWallet();
  const { getUnstakingStGASPostionList } = useContract();

  const [positionList, setPositionList] = useState([]);

  useEffect(() => {
    updatePositionList();
  }, [account]);

  const updatePositionList = async () => {
    if (!account) return setPositionList([]);
    const res = await getUnstakingStGASPostionList(account);
    console.log(res);
  };

  return (
    <Wrapper>
      <Table aria-label="position-list">
        <TableHeader>
          <TableColumn>id</TableColumn>
          <TableColumn>unstakeTime</TableColumn>
          <TableColumn>amount</TableColumn>
          <TableColumn>progress</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0.001</TableCell>
            <TableCell>
              <Progress
                aria-label="claim-progress"
                value={60}
                showValueLabel={true}
                classNames={{
                  indicator: 'bg-gradient-to-r from-red-500 to-yellow-500',
                  value: 'text-foreground/60',
                }}
              ></Progress>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default PositionList;

const Wrapper = styled.div`
  ${tw``};
`;
