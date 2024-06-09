import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { storage } from "../../../fb";
const imageListRef = ref(storage, "animations/");

const AnimPlayer = (props) => {
   const [animUrl, setAnimUrl] = useState("");

  const getImage = async (fileName) => {
    // Create a reference to the file whose metadata we want to retrieve
    if (fileName) {
      const storageRef = ref(storage, `animations/${fileName}`);
       getDownloadURL(storageRef).then((url =>{
        // console.log("Download Url: " + url)
        setAnimUrl(url);
      }))

      // setAnimUrl(viewUrl);
      // console.log(viewUrl);
    } else {
      return null;
    }
  };

  useEffect(() => {
    // console.log("popofdspf", props.fileName);
    if (props.fileName) {
      getImage(props.fileName);
    }
    // listAll(imageListRef).then(results=>{
    //   console.log(results)
    //   results.items.forEach((item)=>{
    //     getDownloadURL(item).then((url)=>{
    //       setImageList((prev)=>[...prev,url])
    //     })
    //   })
    // }).catch(err=>{console.log(err)})
  }, []);

  if (animUrl) {
    return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <DotLottieReact
          src={animUrl}
          loop
          autoplay
          style={{
            maxWidth: "600px",
          }}
        />
      </div>
    );
  } else {
  }
  //  return (

  //   <div>
  //     {imageList.map(url=>{
  //       return(
  //         <DotLottieReact
  //         src={url}
  //         loop
  //         autoplay
  //         style={{
  //           maxWidth: "600px"
  //         }}
  //       />
  //       )
  //     })}
  //   </div>

  // );
};

export default AnimPlayer;
