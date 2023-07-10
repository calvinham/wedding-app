import React from 'react';

const SvgImgIcon: React.FC<
  {
    width?: number;
    height?: number;
  } & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ width, height, ...props }) => {
  return (
    <img
      {...props}
      style={{
        width: `${width}px` || '100%',
        height: `${height}px` || '100%',
        ...props.style,
      }}
    />
  );
};

export default SvgImgIcon;
