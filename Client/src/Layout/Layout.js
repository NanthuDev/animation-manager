import Uploader from "../Models/Components/uploader/Uploader";
import Header from "../Models/Header/header";
import NavBar from "../Models/Viewer/NavBar";
import AnimationServices from "../Services/animations";

 

function Layout() {
  AnimationServices.searchAnimations("hi")
  return (
    <div className="App">
     <Header> 
     </Header>
     <NavBar>
     </NavBar>
 
     
    </div>
  );
}

export default Layout;
