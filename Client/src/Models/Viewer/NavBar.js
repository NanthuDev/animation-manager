import AnimPlayer from "../Components/Player/Player";
import SearchBar from "../Components/SearchBar/Search";
import Uploader from "../Components/uploader/Uploader";

 
 

function NavBar() {
  return (
    <div className="App">
    
     <div class="md:container md:mx-auto">
     {/* <h1 className="text-3xl font-bold underline">
       Animation Management System - NavBar

      </h1> */}
      <SearchBar></SearchBar>
      <AnimPlayer></AnimPlayer>
      <Uploader></Uploader>
</div>
    </div>
  );
}

export default NavBar;
