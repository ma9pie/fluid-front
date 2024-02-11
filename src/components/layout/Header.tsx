import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

import ChainButton from '@/components/common/buttons/ChainButton';
import ConnectWalletBtn from '@/components/common/buttons/ConnectWalletBtn';
import Flex from '@/components/common/Flex';
import Img from '@/components/common/Img';
import ResponsiveView from '@/components/common/ResponsiveView';
import Text from '@/components/common/Text';
import ThemeToggle from '@/components/common/ThemeToggle';
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from '@/components/nextui';

const MENU_LIST = [
  { title: 'Home', url: '/' },
  { title: 'Stake', url: '/stake' },
];

const Header = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <LinkContainer>
          <LogoWrapper href="/">
            <Img src="/images/logo/logo.svg" width={48} height={48}></Img>
          </LogoWrapper>

          <ResponsiveView
            desktop={
              <MenuContainer>
                {MENU_LIST.map(({ title, url }) => (
                  <Link key={title} href={url}>
                    <Menu selected={router.pathname === url}>{title}</Menu>
                  </Link>
                ))}
              </MenuContainer>
            }
          ></ResponsiveView>
        </LinkContainer>

        <ResponsiveView
          mobile={
            <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
              <NavbarContent justify="end">
                <NavbarMenuToggle></NavbarMenuToggle>
                <NavbarMenu>
                  <Flex justify="between">
                    <Text>Dark Mode</Text>
                    <ThemeToggle></ThemeToggle>
                  </Flex>

                  <Flex col gap={8}>
                    <ChainButton></ChainButton>
                    <ConnectWalletBtn></ConnectWalletBtn>
                  </Flex>

                  <MenuContainer>
                    {MENU_LIST.map(({ title, url }) => (
                      <Link key={title} href={url}>
                        <Menu selected={router.pathname === url}>{title}</Menu>
                      </Link>
                    ))}
                  </MenuContainer>
                </NavbarMenu>
              </NavbarContent>
            </Navbar>
          }
          desktop={
            <ButtonContainer>
              <ThemeToggle></ThemeToggle>
              <ChainButton></ChainButton>
              <ConnectWalletBtn></ConnectWalletBtn>
            </ButtonContainer>
          }
        ></ResponsiveView>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`w-full h-16 border-b border-solid`};
  ${tw`border-neutral-100`};
  ${tw`dark:border-neutral-900`};
`;
const Container = styled.div`
  ${tw`flex justify-between items-center gap-6 h-16 px-6`};
`;
const LinkContainer = styled.div`
  ${tw`flex items-center gap-8`};
`;
const MenuContainer = styled.div`
  ${tw`flex flex-col mt-6 gap-1`};
  ${tw`md:(flex flex-row gap-0 mt-0)`};
`;
const ButtonContainer = styled.div`
  ${tw`flex items-center gap-2`};
`;
const LogoWrapper = styled(Link)`
  ${tw`p-2`};
`;
const Menu = styled.div<{ selected: boolean }>`
  ${tw`text-lg font-bold text-white px-4 py-2`};
  ${(props) =>
    props.selected
      ? tw`text-black dark:text-white`
      : tw`text-neutral-400 dark:text-neutral-600`};
`;
