import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Registration from "./Pages/Registration";
import LoginModal from "./Components/LoginModal";
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"
import AuthProvider from "./Context/AuthContext";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (

    <AuthProvider>
    <BrowserRouter>
    
    <Routes>  
      <Route path={"/"} element={<Website/>}/>
      <Route path={"/edit-profile"} element={<EditProfile/>}/>
      <Route path={"/Profile"} element={<Profile/>}/>
      <Route path={"/Dashboard"} element={<Dashboard/>}/>
      <Route path={"/LoginModal"} element={<LoginModal/>}></Route>
      <Route path={"/Registration"} element={<Registration/>}/>
    </Routes>
     
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

