import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import LinkBox from '@/components/home/LinkBox';
import Layout from '@/components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Flex col justify="between" flex={1}>
        <div></div>

        <ContentWrapper>
          <Text
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            semibold
            size={72}
          >
            DApp
          </Text>
        </ContentWrapper>

        <LinkContainer>
          <LinkBox
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Docs"
            desc="Find in-depth information about Next.js features and API."
          ></LinkBox>

          <LinkBox
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            title="Learn"
            desc="Learn about Next.js in an interactive course with quizzes!"
          ></LinkBox>

          <LinkBox
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Templates"
            desc="Explore starter templates for Next.js."
          ></LinkBox>

          <LinkBox
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            title="Deploy"
            desc="Instantly deploy your Next.js site to a shareable URL with Vercel."
          ></LinkBox>
        </LinkContainer>
      </Flex>
    </Layout>
  );
};

export default Home;

const ContentWrapper = styled.div`
  ${tw`relative flex justify-center items-center min-h-[360px]`};
`;
const LinkContainer = styled.div`
  ${tw`grid`};
  ${tw`lg:(max-w-5xl w-full mb-0 grid-cols-4 text-left)`};
`;
