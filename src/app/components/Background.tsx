import Image from 'next/image';
import React from 'react';
// import bgImage from '../../images/wallpaper.jpeg'
import bgImage from '../../images/walp.webp';

const Background = (props: any) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    >
      <Image
        alt="Mountains"
        src={bgImage}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default Background;
