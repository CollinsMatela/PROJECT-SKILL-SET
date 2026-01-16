import { useContext, useState } from "react";
import InputField from "./InputField";
import handleLoginSubmit from "../Services/handleLoginSubmit";
import {AuthContext} from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading"



const LoginModal = ({onClose}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const {setUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const loginSubmit = async () => {
            setErrors({});

            if (!email) { setErrors({ email: "Email is required" }); return; }
            if (!password) { setErrors({ password: "Password is required" }); return; }

            const loginData = { email, password };

            try {
                setLoading(true);
                const res = await handleLoginSubmit(loginData);

                if(res.data.user.firstname === "" || res.data.user.lastname === "" || res.data.user.middle === ""
                || res.data.user.age === "" || res.data.user.birthdate === "")
                {
                     setLoading(false);
                     navigate(`/basic-info/${res.data.user.accountId}`);
                     return;
                } 

                localStorage.setItem("user", JSON.stringify(res.data.user));
                console.log("Login successful", res.data.user);
                setUserProfile(res.data.user);
                await delay(5000);
                setLoading(false);
                navigate(`/dashboard/${res.data.user.accountId}`);
                onClose();
                
            } catch (error) {
                console.log("Login failed", error);
            }
};
    
    return(
    
    <div className="fixed z-50 h-screen w-full justify-center items-center flex ">
       {loading ? <Loading/> : ""}
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