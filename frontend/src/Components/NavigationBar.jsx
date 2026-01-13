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
        <div className="flex justify-center items-center gap-1">
            <div className="bg-green-500 h-8 w-8 justify-center items-center flex rounded-md border-b-4 border-black hover:bg-green-600 cursor-pointer">
                <h1 className="text-white font-nanum font-extrabold text-sm">SS+</h1>
            </div>
        </div>
        <button className="bg-green-500 h-8 w-25 text-white font-bold font-nanum text-md rounded-md border-b-4 border-black hover:bg-green-600 cursor-pointer"
                onClick={handleLogin}>— Login</button>
    </div>

    {showLogin && (<LoginModal 
                    onClose={() => setShowLogin(false)} 
                  />)}
    
    </>

    );
}


export default NavigationBar;