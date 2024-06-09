import { useEffect, useState } from "react";
import AnimationServices from "../../Services/animations";
import AnimPlayer from "../Components/Player/Player";
import SearchBar from "../Components/SearchBar/Search";
import Uploader from "../Components/uploader/Uploader";
import AnimCards from "../Components/AnimCards/AnimCards";

function NavBar() {
  const [animLists, setAnimLists] = useState([]);
  const [loader, setLoader] = useState(true);

  const refresh = () => {
    console.log("hjaooo");
    setLoader(false);
    getAnimeLists();
  };
  const getAnimeLists = () => {
    const requestBody = {
      query: `query{
        events{
          title,
          description,
          fileName,
          tags
        }
      }`,
    };
    AnimationServices.getAnimations(requestBody).then((animLists) => {
      console.log(animLists.length);
      setAnimLists(animLists);
      setLoader(false);
    });
  };
  //getAnimeLists()
  useEffect(() => {
    if (loader) {
      getAnimeLists();
    }
  }, [loader]);
  return (
    <div className="App">
      <div class="md:container md:mx-auto">
        {/* <h1 className="text-3xl font-bold underline">
       Animation Management System - NavBar

      </h1> */}
        <SearchBar refresh={refresh}></SearchBar>
        {/* <Uploader></Uploader> */}
        {animLists.length !== 0 ? (
          <AnimCards animList={animLists}></AnimCards>
        ) : (
          <h2>Upload your anims..!</h2>
        )}
      </div>
    </div>
  );
}

export default NavBar;
