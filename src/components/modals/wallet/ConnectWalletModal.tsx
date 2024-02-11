import Image from 'next/image';
import React, { useEffect } from 'react';
import { MdAccountBalanceWallet } from 'react-icons/md';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import useModal from '@/hooks/useModal';
import useWallet from '@/hooks/useWallet';
import { WalletType } from '@/types';

const ICON_SIZE = 64;

const ConnectWalletModal = () => {
  const { account, connectors, error, connect } = useWallet();
  const { closeModal } = useModal();

  useEffect(() => {
    if (account) closeModal();
  }, [account, closeModal]);

  return (
    <Wrapper>
      <Text neutral500>
        Start by connecting with one of the wallets below. Be sure to store your
        private keys or seed phrase securely. Never share them with anyone.
      </Text>

      <Grid size={ICON_SIZE}>
        {[...connectors]
          .sort((a) => {
            return a.name === WalletType.MetaMask ? -1 : 1;
          })
          .map((connector) => {
            const { id, name } = connector;

            return (
              <WalletBox key={id} onClick={() => connect({ connector })}>
                <IconBox size={ICON_SIZE}>
                  {name === WalletType.MetaMask && (
                    <Image
                      fill
                      src="/images/wallets/metamask.svg"
                      alt={id}
                    ></Image>
                  )}
                  {name === WalletType.WalletConnect && (
                    <Image
                      fill
                      src="/images/wallets/wallet-connect.svg"
                      alt={id}
                    ></Image>
                  )}
                  {name === WalletType.CoinbaseWallet && (
                    <Image
                      fill
                      src="/images/wallets/coinbase.svg"
                      alt={id}
                    ></Image>
                  )}
                  {name === WalletType.Injected && (
                    <MdAccountBalanceWallet
                      size={ICON_SIZE / 2}
                    ></MdAccountBalanceWallet>
                  )}
                </IconBox>
              </WalletBox>
            );
          })}
      </Grid>

      <ErrorBox>
        {error && (
          <Text xs medium red500>
            {error.message}
          </Text>
        )}
      </ErrorBox>
    </Wrapper>
  );
};

export default ConnectWalletModal;

const Wrapper = styled.div`
  ${tw`flex flex-col gap-6`};
`;
const WalletBox = styled.div`
  ${tw`flex flex-col gap-1 items-center`};
`;
const IconBox = styled.div<{ size: number }>`
  ${tw`relative flex justify-center items-center border-2 border-solid rounded-xl cursor-pointer`};
  ${tw`border-neutral-300`};
  ${tw`dark:border-neutral-700`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`;
const Grid = styled.div<{ size: number }>`
  ${tw`grid justify-center gap-4`};
  grid-template-columns: ${(props) => `repeat(auto-fill, ${props.size}px)`};
`;
const ErrorBox = styled.div`
  ${tw`min-h-[20px]`};
`;
