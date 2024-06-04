import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AnimPlayer = () => {
    console.log("plaa")
  return (
    <DotLottieReact
      src="http://localhost:3000/assets/jsons/Animation1717517755581.json"
      loop
      autoplay
      style={{
        maxWidth: "600px"
      }}
    />
   
  );
};


export default AnimPlayer;
