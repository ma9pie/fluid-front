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
import { IS_PRODUCTION } from '@/constants';

const MENU_LIST =
  // TODO: mainnet migration 이후 open
  IS_PRODUCTION
    ? [{ title: 'Home', url: '/' }]
    : [
        { title: 'Home', url: '/' },
        { title: 'Fluid', url: '/fluid' },
        { title: 'stGAS', url: '/stgas' },
        { title: 'Portfolio', url: '/portfolio' },
        { title: 'Admin', url: '/admin' },
      ];

const Header = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <LinkContainer>
          <LogoWrapper>
            <Link href="/">
              <Img src="/images/logo/logo.svg" width={48} height={48}></Img>
            </Link>
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
            <Navbar
              className="bg-transparent"
              isMenuOpen={isMenuOpen}
              onMenuOpenChange={setIsMenuOpen}
            >
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
  ${tw`w-full h-16 bg-[rgba(255,255,255,0.01)] backdrop-blur-[18px]`};
`;
const Container = styled.div`
  ${tw`flex justify-between items-center gap-6 h-16`};
  ${tw`pl-4`};
  ${tw`md:px-6`};
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
const LogoWrapper = styled.div`
  ${tw`w-12 h-12`};
`;
const Menu = styled.div<{ selected: boolean }>`
  ${tw`text-lg font-bold text-white px-3 py-2`};
  ${(props) =>
    props.selected
      ? tw`text-black dark:text-white`
      : tw`text-neutral-400 dark:text-neutral-600`};
`;
