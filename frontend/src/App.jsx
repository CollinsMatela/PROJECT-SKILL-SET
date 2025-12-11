import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Website from "./Pages/Website";

function App() {
  return (
    
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route path={"/"} element={<Website/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;

