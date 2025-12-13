import { useNavigate } from "react-router-dom";
import CommunmityIMG from "../Images/Community.jpg"
import RegisterHandler from "../Utils/RegisterHandler.js";
const Home = () => {
    const navigate = useNavigate();

    const handleGetConnect = () =>{
        alert("working")
        navigate("/Registration");
    }

    return(
            <section className="bg-slate-900 h-screen w-full flex flex-col">
                 <div className="bg-slate-900 flex-2 w-full flex ">
                    

                    <div className="bg-white flex-1 items-center justify-start flex md:pl-60 md:pr-10 border-b-2 border-green-500">
                        
                         <h1 className="text-[170px] font-nanum font-extrabold text-black">SKILL SET+</h1>
                    </div>
                    
                    <div className="bg-white flex-1 flex flex-col items-center justify-center md:pr-60 md:pl-10 border-2 border-green-500">
                        <div className="w-full">
                            <h1 className="text-md text-white font-nanum rounded-md bg-green-500 h-8 w-40 justify-center flex items-center">— Register now</h1>
                        </div>
                        
                        <h1 className="text-4xl md:text-7xl font-extrabold font-nanum text-black mb-2">
                            Connect, share, and earn with SKILL SET+.
                        </h1>
                        <p className="text-black text-md md:text-lg mb-4">
                            Become part of our community — a community where your talents are recognized and rewarded.
                        </p>

                        <div className="w-full">
                           <button className="bg-black h-12 w-40 justify-center items-center flex rounded-md cursor-pointer border-b-4 border-green-500"
                                    onClick={handleGetConnect}>
                            <h1 className="text-white font-nanum text-[20px]">— Get Connect</h1>
                           </button> 
                        </div>
                        
                        
                    </div>


                 </div>

                 
                 <div className="relative bg-slate-900 h-[40vh] w-full overflow-hidden">
                    <img src={CommunmityIMG} className="w-screen h-full object-cover rounded-lg shadow-lg" />
                    <div className="absolute bottom-0 left-0 w-full h-3/3 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                 </div>
                 
            </section>
            
    )
};
export default Home;