import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Website from "./Pages/Website";
import Registration from "./Pages/Registration";

function App() {
  return (
    
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      
      <Route path={"/"} element={<Website/>}/>
      
      <Route path={"/Registration"} element={<Registration/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;

