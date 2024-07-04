import Image from "next/image";
import React from "react";
// import bgImage from '../../images/wallpaper.jpeg'
import bgImage from "../../images/walp.webp";

const Background = (props: any) => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          <Image
            alt="Mountains"
            src={"/images/walp.webp"}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )
};

export default Background;
