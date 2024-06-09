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
      setAnimLists(animLists);
      setLoader(false);
    });
  };
  const updateAnimListOnSearch = (values) => {
    getSearchResults(values);
  };
  const getSearchResults = (searchText) => {
    if (searchText) {
      AnimationServices.searchAnimations(searchText).then((results) => {
        setAnimLists(results);
      });
    } else {
      getAnimeLists();
    }
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
        <SearchBar
          refresh={refresh}
          updateAnimListOnSearch={updateAnimListOnSearch}
        ></SearchBar>
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
