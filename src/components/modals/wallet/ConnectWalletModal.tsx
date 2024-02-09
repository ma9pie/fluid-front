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
  const { account, connectors, pendingConnector, error, isLoading, connect } =
    useWallet();
  const { closeModal } = useModal();

  useEffect(() => {
    if (account) closeModal();
  }, [account]);

  return (
    <Wrapper>
      <Text neutral500>
        Start by connecting with one of the wallets below. Be sure to store your
        private keys or seed phrase securely. Never share them with anyone.
      </Text>

      <Grid size={ICON_SIZE}>
        {connectors.map((connector) => {
          const { id, name } = connector;

          return (
            <WalletBox
              key={id}
              disabled={!connector.ready}
              onClick={() => connect({ connector })}
            >
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

              <Text xs>
                {isLoading && connector.id === pendingConnector?.id
                  ? 'connecting'
                  : name}
              </Text>
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
const WalletBox = styled.div<{ disabled: boolean }>`
  ${tw`flex flex-col gap-1 items-center`};
  ${(props) =>
    props.disabled ? tw`pointer-events-none opacity-30` : tw`cursor-pointer`};
`;
const IconBox = styled.div<{ size: number }>`
  ${tw`relative flex justify-center items-center border-4 border-solid border-neutral-800 rounded-xl`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`;
const Grid = styled.div<{ size: number }>`
  ${tw`grid justify-center gap-4`};
  grid-template-columns: repeat(auto-fill, 100px);
`;
const ErrorBox = styled.div`
  ${tw`min-h-[20px]`};
`;
