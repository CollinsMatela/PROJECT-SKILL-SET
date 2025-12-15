import { useState } from "react";
import LoginModal from "./LoginModal";

const NavigationBar = () =>{

    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () =>{
        setShowLogin(true)
    }
    return(
    <>
    <div className="z-1 fixed bg-white h-15 w-full px-60 justify-between items-center flex border-b-2 border-green-500">
        <div>
            <h1 className="text-green-500 font-nanum font-extrabold text-2xl">SKILL SETS+</h1>
        </div>
        <button className="bg-green-500 h-8 w-25 text-white font-bold font-nanum text-md rounded-md border-b-2 border-black hover:bg-green-600"
                onClick={handleLogin}>— Login</button>
    </div>

    {showLogin && (<LoginModal 
                    onClose={() => setShowLogin(false)} 
                  />)}
    
    </>

    );
}


export default NavigationBar;