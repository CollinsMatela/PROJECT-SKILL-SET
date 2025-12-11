import CommunmityIMG from "../Images/Community.jpg"
const Home = () => {
    return(
            <section className="bg-slate-900 h-screen w-screen flex flex-col">
                 <div className="bg-slate-900 flex-2 w-full flex ">

                    <div className="bg-white flex-1 items-center justify-start flex md:pl-60 md:pr-10 border-b-2 border-slate-900">
                         <h1 className="text-[140px] text-slate-900">SKILL SET+</h1>
                    </div>
                    
                    <div className="bg-white flex-1 flex flex-col items-center justify-center md:pr-60 md:pl-10 border-2 border-slate-900">
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-700 mb-4">
                            Find the Right Skills in Your Community
                        </h1>
                        <p className="text-slate-700 text-lg md:text-xl mb-6">
                            Connect with local experts — from gardening to plumbing — and get the job done faster, easier, and trusted by neighbors.
                        </p>
                        
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