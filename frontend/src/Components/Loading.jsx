import { useEffect, useState } from "react";

const Loading = () =>{

      const [animation, setAnimation] = useState(false);

      useEffect(()=>{
          setAnimation(true);
      },[])

      return(
        <div className={`bg-green-500 justify-center items-center z-50 absolute inset-0 transition-all duration-1000 ease-out flex gap-2`}>
            
            <div className={`${animation ? "translate-x-0 p-2 opacity-100 bg-white border-b-4 border-gray-300" : "-translate-x-96 opacity-0 bg-white"} justify-end items-center h-12 w-12 rounded-md shadow-2xl flex transition-all duration-3000 ease-out`}>
              <h1 className={`text-2xl font-nanum transition-all duration-4000 ease-out font-bold text-green-500`}>SS+</h1>
            </div>

            <h1 className={`${animation ? "translate-x-0 opacity-100 text-4xl" : "translate-x-96 opacity-0 text-9xl"} font-nanum transition-all duration-3000 ease-out font-bold text-white`}>SKILL SET+</h1>
        </div>
      )
}
export default Loading;