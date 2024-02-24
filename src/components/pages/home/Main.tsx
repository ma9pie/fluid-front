import React from 'react';
import tw, { styled } from 'twin.macro';

const Main = () => {
  return (
    <Wrapper>
      <Title className="popins">
        UNLOCK GAS FEE REWARD IMMEDIATELY WITH stGAS
      </Title>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col justify-center bg-center bg-no-repeat bg-[length:100%_100%] bg-[url('/images/background.png')]`};
  ${tw`bg-yellowBg`};
  ${tw`dark:bg-darkBg`};
`;
const Title = styled.h1`
  ${tw`w-[60%] ml-[5%] font-light !leading-[1.2]`};
  ${tw`text-3xl`};
  ${tw`sm:text-4xl`};
  ${tw`md:text-5xl`};
  ${tw`lg:text-6xl`};
  ${tw`xl:text-7xl`};
  ${tw`2xl:text-8xl`};
`;
