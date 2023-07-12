import React from 'react';

const FullSizeImg: React.FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: 'auto',
        filter: 'grayscale(100%)',
      }}
    />
  );
};

export default FullSizeImg;
