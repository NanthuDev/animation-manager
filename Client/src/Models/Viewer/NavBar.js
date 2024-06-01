import SearchBar from "../Components/SearchBar/Search";

 
 

function NavBar() {
  return (
    <div className="App">
    
     <div class="md:container md:mx-auto">
     {/* <h1 className="text-3xl font-bold underline">
       Animation Management System - NavBar

      </h1> */}
      <SearchBar></SearchBar>
</div>
    </div>
  );
}

export default NavBar;
