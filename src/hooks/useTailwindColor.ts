import { useMemo } from 'react';
import tailwindColors from 'tailwindcss/colors';

interface Props {
  defaultColor?: string;
  [key: string]: any;
}

const useTailwindColor = ({ defaultColor, ...props }: Props) => {
  const color = useMemo(() => {
    let code = defaultColor;
    Object.keys(props).map((key) => {
      const result = key.match(/([a-z]+)(\d+)/);
      if (!result) return;
      const [, color, number] = result;
      const tailwindColor = (tailwindColors as any)[color];
      if (!tailwindColor) return;
      code = tailwindColor[number];
    });
    return code;
  }, [props]);

  return color;
};

export default useTailwindColor;
