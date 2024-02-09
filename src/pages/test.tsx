import cn from 'classnames';
import { useTheme } from 'next-themes';
import React, { useEffect, useMemo, useState } from 'react';
import tw, { styled } from 'twin.macro';

import Divider from '@/components/common/Divider';
import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import Layout from '@/components/layout/Layout';
import useTailwindColor from '@/hooks/useTailwindColor';
import { Theme } from '@/types';

const Test = () => {
  return (
    <Layout>
      <Flex col gap={24}>
        <Box>
          <Text neutral50>neutral50</Text>
          <Text neutral100>neutral100</Text>
          <Text neutral200>neutral200</Text>
          <Text neutral300>neutral300</Text>
          <Text neutral400>neutral400</Text>
          <Text neutral500>neutral500</Text>
          <Text neutral600>neutral600</Text>
          <Text neutral700>neutral700</Text>
          <Text neutral800>neutral800</Text>
          <Text neutral900>neutral900</Text>
          <Text neutral950>neutral950</Text>
        </Box>

        <Box>
          <Text red50>red50</Text>
          <Text red100>red100</Text>
          <Text red200>red200</Text>
          <Text red300>red300</Text>
          <Text red400>red400</Text>
          <Text red500>red500</Text>
          <Text red600>red600</Text>
          <Text red700>red700</Text>
          <Text red800>red800</Text>
          <Text red900>red900</Text>
          <Text red950>red950</Text>
        </Box>

        <Box>
          <Flex justify="start">
            <Text>start</Text>
            <Text>start</Text>
          </Flex>
        </Box>

        <Box>
          <Flex justify="end">
            <Text>end</Text>
            <Text>end</Text>
          </Flex>
        </Box>

        <Box>
          <Flex justify="center" gap={16}>
            <Text>center</Text>
            <Text>gap16</Text>
          </Flex>
        </Box>

        <Box>
          <Flex justify="between">
            <Text>between</Text>
            <Text>between</Text>
          </Flex>
        </Box>

        <Box>
          <Flex col items="start">
            <Text>start</Text>
            <Text>start</Text>
          </Flex>
        </Box>

        <Box>
          <Flex col items="end">
            <Text>end</Text>
            <Text>end</Text>
          </Flex>
        </Box>

        <Box>
          <Flex col items="center" gap={16}>
            <Text>center</Text>
            <Text>gap16</Text>
          </Flex>
        </Box>

        <Box>
          <Divider neutral500 my={16}></Divider>
          <Divider neutral500 my={16}></Divider>
          <Divider neutral500 my={16}></Divider>
        </Box>

        <Box className="gap-4">
          <Divider neutral50></Divider>
          <Divider neutral100></Divider>
          <Divider neutral200></Divider>
          <Divider neutral300></Divider>
          <Divider neutral400></Divider>
          <Divider neutral500></Divider>
          <Divider neutral600></Divider>
          <Divider neutral700></Divider>
          <Divider neutral800></Divider>
          <Divider neutral900></Divider>
          <Divider neutral950></Divider>
        </Box>

        <Box className="gap-4">
          <Divider neutral50 dotted></Divider>
          <Divider neutral100 dotted></Divider>
          <Divider neutral200 dotted></Divider>
          <Divider neutral300 dotted></Divider>
          <Divider neutral400 dotted></Divider>
          <Divider neutral500 dotted></Divider>
          <Divider neutral600 dotted></Divider>
          <Divider neutral700 dotted></Divider>
          <Divider neutral800 dotted></Divider>
          <Divider neutral900 dotted></Divider>
          <Divider neutral950 dotted></Divider>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Test;

const Box = ({ className, children }: any) => {
  const { theme } = useTheme();
  const slate800 = useTailwindColor({ slate800: true });
  const slate300 = useTailwindColor({ slate300: true });

  const [color, setColor] = useState<string | undefined>();

  useEffect(() => {
    const _color = theme === Theme.Dark ? slate800 : slate300;
    setColor(_color);
  }, [theme, slate800, slate300]);

  return (
    <BoxWrapper className={className} style={{ backgroundColor: color }}>
      {children}
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div<{ theme?: string }>`
  ${tw`flex flex-col p-4 rounded-lg`};
  ${(props) =>
    props.theme === Theme.Dark ? tw`bg-slate-800` : tw`bg-slate-300`};
`;
