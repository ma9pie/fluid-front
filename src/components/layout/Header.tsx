import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

import ChainButton from '@/components/common/buttons/ChainButton';
import ConnectWalletBtn from '@/components/common/buttons/ConnectWalletBtn';
import Flex from '@/components/common/Flex';
import ResponsiveView from '@/components/common/ResponsiveView';
import ThemeToggle from '@/components/common/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <ResponsiveView
        mobile={
          <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent justify="end">
              <NavbarMenuToggle></NavbarMenuToggle>
            </NavbarContent>

            <NavbarMenu>
              <ThemeToggle></ThemeToggle>
              <Flex gap={8}>
                <ChainButton></ChainButton>
                <ConnectWalletBtn></ConnectWalletBtn>
              </Flex>
            </NavbarMenu>
          </Navbar>
        }
        desktop={
          <Container>
            <ThemeToggle></ThemeToggle>
            <ChainButton></ChainButton>
            <ConnectWalletBtn></ConnectWalletBtn>
          </Container>
        }
      ></ResponsiveView>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`w-full h-16`};
`;
const Container = styled.div`
  ${tw`flex justify-end items-center gap-2 h-16 px-6`};
`;
