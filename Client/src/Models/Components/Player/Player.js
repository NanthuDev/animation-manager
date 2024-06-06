import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../../fb';


const AnimPlayer = () => {
    console.log("plaa")
    const [imageList,setImageList] = useState([]);
    const imageListRef = ref(storage,"animations/");
    useEffect(()=>{
      listAll(imageListRef).then(results=>{
        console.log(results)
        results.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageList((prev)=>[...prev,url])
          })
        })
      }).catch(err=>{console.log(err)})
    },[])
    console.log(imageList)
  return (
    
    <div>
      {imageList.map(url=>{
        return(
          <DotLottieReact
          src={url}
          loop
          autoplay
          style={{
            maxWidth: "600px"
          }}
        />
        )
      })}
    </div>
   
   
  );
};


export default AnimPlayer;
