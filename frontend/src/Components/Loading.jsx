import { useEffect, useState } from "react";

const Loading = () => {

  const [animation, setAnimation] = useState(false);


  useEffect(() => {
    setAnimation(true);

  }, []);



  return (
    <div className="bg-gradient-to-tr from-white via-green-300 to-emerald-500 justify-center items-center z-50 absolute inset-0 flex gap-2">
      
      <h1 className={`${animation ? "translate-x-0 opacity-100 text-4xl" : "translate-x-96 opacity-0 text-9xl"} font-nanum font-bold text-white transition-all duration-3000 ease-out`}>
        GRIND SPHERE
      </h1>


    </div>
  );
};

export default Loading;