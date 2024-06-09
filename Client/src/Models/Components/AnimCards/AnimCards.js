import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../../fb";
import AnimPlayer from "../Player/Player";

const AnimCards = (props) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {}, []);
  console.log(props);
  if (props.animList) {
    return (
      <div>
        <div class="flex flex-wrap justify-center mt-10">
          {props.animList.map((anim) => (
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="">
                    <a href="#">
                      {/* <img
                        class="p-8 rounded-t-lg"
                        src="/docs/images/products/apple-watch.png"
                        alt="product image"
                      /> */}
                      {/* <AnimPlayer fileName={anim.fileName}>

                      </AnimPlayer> */}
                    </a>
                  </div>

                  {/* <h2 class="text-white dark:text-white text-lg font-medium">
                    Feature 1
                  </h2> */}
                  <AnimPlayer fileName={anim.fileName}></AnimPlayer>
                </div>
                <div class="flex flex-col justify-between flex-grow">
                  <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    {anim.title}
                  </p>
                  {/* <a
                    href="#"
                    class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      //   <div>
      //     {props.animList.map((anim) => (
      //       <p>{anim.title}</p>
      //     ))}
      //   </div>
    );
  }
};

export default AnimCards;
