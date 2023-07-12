import React from 'react';

const FullSizeImg: React.FC<{
  src: string;
  alt: string;
  grayscale?: number;
}> = ({ src, alt, grayscale }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: 'auto',
        filter: `grayscale(${grayscale ? grayscale : 0}%)`,
      }}
    />
  );
};

export default FullSizeImg;
