import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";
import Registration from "./Pages/Registration";
import LoginModal from "./Components/LoginModal";

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
      
      <Route path={"/"} element={<Website/>}/>
      <Route path="/Login" element={<LoginModal/>}></Route>
      <Route path={"/Registration"} element={<Registration/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;

