import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./Pages/Website";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Website/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

