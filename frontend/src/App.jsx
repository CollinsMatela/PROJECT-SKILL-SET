import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Registration from "./Pages/Registration";
import LoginModal from "./Components/LoginModal";
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"
import AuthProvider from "./Context/AuthContext";
import EditProfileModal from "./Components/EditProfileModal";
import Loading from "./Components/Loading"
import ViewProfile from "./Pages/ViewProfile";
import Basic_Info from "./Pages/Basic_Info";
import FilterPostModal from "./Components/FilterPostModal";
import MapPage from "./Pages/MapPage"
import SellerRegistration from "./Pages/SellerRegistration";
import Admin from "./Pages/Admin";


function App() {
  return (
    
    <AuthProvider>
    <BrowserRouter>
    
    <Routes>  
      <Route path={"/"} element={<Website/>}/>
      <Route path={"/Loading"} element={<Loading/>}/>
      <Route path={"/profile/:accountId"} element={<Profile/>}/>
      <Route path={"/dashboard/:accountId"} element={<Dashboard/>}/>
      <Route path={"/LoginModal"} element={<LoginModal/>}></Route>
      <Route path={"/Registration"} element={<Registration/>}/>
      <Route path={"/edit-profile-modal"} element={<EditProfileModal/>}></Route>
      <Route path={"/view-profile/:accountId"} element={<ViewProfile/>}></Route>
      <Route path={"/basic-info/:accountId"} element={<Basic_Info/>}></Route>
      <Route path={"/filter-post-modal"} element={<FilterPostModal/>}></Route>
      <Route path={"/map-location"} element={<MapPage/>}></Route>
      <Route path={"/seller-registration/:accountId"} element={<SellerRegistration/>}></Route>
      <Route path={"/admin"} element={<Admin/>}></Route>
    </Routes>
     
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

