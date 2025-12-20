import { useContext, useState } from "react";
import InputField from "./InputField";
import handleLoginSubmit from "../Services/handleLoginSubmit";
import {AuthContext} from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";



const LoginModal = ({onClose}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    const {setUserAccount, setUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const loginSubmit = async () => {
            setErrors({});

            if (!email) { setErrors({ email: "Email is required" }); return; }
            if (!password) { setErrors({ password: "Password is required" }); return; }

            const loginData = { email, password };

            try {
                const res = await handleLoginSubmit(loginData);

                if (res.data.user.isUser) { 
                console.log(`${res.data.message} : ${res.data.user.accountId}`);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setUserAccount(res.data.user);
                navigate("/Dashboard");
                onClose();
                }
            } catch (error) {
                console.log("Login failed", error);
            }
};
    
    return(
    <div className="fixed z-50 h-screen w-full justify-center items-center flex ">
       
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div> {/* backdrop */}

        <div className="relative bg-white w-100 p-10 rounded-xl flex flex-col gap-2">
            <h1 className="font-nanum text-3xl font-medium w-full items-center justify-center flex">Login your Account!</h1>
            <InputField      label="Email"
                             type="text"
                             name="email"
                             placeholder="Enter your email address"
                             value={email}
                             onChange={(e) => {setEmail(e.target.value)}}
                             error={errors.email}
            />
            <InputField      label="Password"
                             type="password"
                             name="password"
                             placeholder="Enter your password"
                             value={password}
                             onChange={(e) => {setPassword(e.target.value)}}
                             error={errors.password}
            />
            <button className="bg-green-500 h-12 w-full text-white font-nanum text-2xl rounded-xl border-b-4 border-black mt-4 hover:bg-green-600"
                    onClick={loginSubmit}>Get In!</button>
        </div>
    </div>
    );
}
export default LoginModal