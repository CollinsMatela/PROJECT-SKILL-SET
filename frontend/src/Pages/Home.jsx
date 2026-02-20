import { useNavigate } from "react-router-dom";
import CommunmityIMG from "../Images/Community.jpg"

const Home = () => {
    const navigate = useNavigate();

    const handleGetConnect = () =>{
        navigate("/Registration");
    }

    return(
            <section className="bg-slate-900 h-screen w-full flex flex-col">

                    <div className="bg-gradient-to-tr from-white via-green-300 to-emerald-500 h-screen w-full items-center justify-center flex flex-col">

                        <div className="gap-4 justify-center items-center flex">
                            <div className="bg-gradient-to-tr from-white via-green-300 to-emerald-500 h-20 w-20 justify-center items-center flex rounded-xl border-1 border-b-6 border-white hover:bg-green-600 cursor-pointer">
                                 <h1 className="text-white font-nanum font-extrabold text-4xl">SS+</h1>
                            </div>
                            <h1 className="text-[100px] font-nanum font-extrabold text-black">GRINDSPHERE</h1>
                        </div>
                        
                        
                        <h1 className="text-4xl md:text-6xl font-extrabold font-nanum text-black">
                            Connect, share, and earn with SKILL SET+.
                        </h1>
                        <p className="text-black text-md md:text-lg mb-2">
                            Become part of our community — a community where your talents are recognized and rewarded.
                        </p>

                        
                           <button className="bg-white h-12 w-40 justify-center items-center flex rounded-md cursor-pointer border-1 border-b-4 hover:-translate-y-1"
                                    onClick={handleGetConnect}>
                            <h1 className="text-black font-nanum text-lg">— Get Connect</h1>
                           </button> 

                    </div>


                 
                 
                 
            </section>
            
    )
};
export default Home;