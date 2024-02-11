import Image from 'next/image';
import React, { useMemo } from 'react';

interface Props {
  key?: string;
  className?: string;
  src: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  alt?: string;
  onClick?: () => void;
}

const Img = ({
  key,
  className,
  src,
  width,
  height,
  fill,
  priority,
  alt,
  onClick,
}: Props) => {
  const style = useMemo(() => {
    if (fill) return {};
    return {
      width: width || 'auto',
      height: height || 'auto',
    };
  }, [width, height, fill]);

  const fileName = useMemo(() => {
    if (!src) return '';
    return src.split('/').at(-1) || '';
  }, [src]);

  return (
    <Image
      key={key}
      className={className}
      src={src}
      width={0}
      height={0}
      style={style}
      fill={fill}
      priority={priority}
      alt={alt || fileName}
      onClick={onClick}
    ></Image>
  );
};

export default Img;
