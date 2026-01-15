import InputField from "../Components/InputField";
import handleRegistrationSubmit from "../Services/handleRegistrationSubmit";
import { useState } from "react";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);

    const [errors, setErrors] = useState({});

    const handleSubmit = async () =>{
        if(!email){
            setErrors({ email: "Email is required" });
            return;
        }
        if(!password){
            setErrors({ password: "Password is required" });
            return;
        }
        if(!confirmpassword){
            setErrors({ confirmpassword: "Confirmation password is required" });
            return;
        } else if (confirmpassword != password){
            setErrors({ confirmpassword: "Confirmation password did not match" });
            return;
        }
        
        const registerData = {
        Email : email,
        Password : password,
        Terms : terms
        };

        try {
            const res = await handleRegistrationSubmit(registerData);

            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setTerms(false)
            setErrors("");

            if(res.data.account){
                alert("Registration successful!");
            }

        } catch (error) {
            console.error(error)
        }
        
    }

    return(
        <>

        <section className="h-screen w-full bg-gray-50 justify-center items-center flex">
        <div className=" bg-white w-1/4 rounded-2xl flex flex-col p-10">
             <div className=" mb-4 ">
                <h1 className="text-5xl font-bold font-nanum">Create your Account!</h1>
            </div>  {/* Header*/}

            <label htmlFor="firstname" className="font-semibold text-gray-600 mb-4 text-md">Account information</label>
            <div className="flex flex-col gap-4 mb-4"> {/* Account*/}
                <InputField label="Email address"
                             type="email"
                             name="email"
                             placeholder="Enter your email (e.g xxx@gmail.com)"
                             value={email}
                             onChange={(e) => {setEmail(e.target.value)}}
                            error={errors.email}
                />
                <InputField label="Password"
                             type="password"
                             name="password"
                             placeholder="Enter your password"
                             value={password}
                             onChange={(e) => {setPassword(e.target.value)}}
                            error={errors.password}
                />
                <InputField label="Confirm password"
                             type="password"
                             name="confirmpassword"
                             placeholder="Enter your confirm password"
                             value={confirmpassword}
                             onChange={(e) => {setConfirmPassword(e.target.value)}}
                            error={errors.confirmpassword}
                />
            </div>
            <div className="flex gap-2 mb-8">
                <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="w-4 h-4"
                        checked={terms}
                        onChange={(e)=>{setTerms(e.target.checked)}}
                />
                <label htmlFor="terms" className="text-gray-700 text-sm">I agree to the{" "}
                    <a href="/terms" className="text-blue-500 underline hover:text-blue-600">Terms and Conditions</a>{" "}
                    and{" "}<a href="/privacy" className="text-blue-500 underline hover:text-blue-600">Privacy Policy</a>. 
                </label>
            </div>
           

            <div className="flex-1 justify-end items-start flex"> {/* Buttons*/}
                <button className="h-12 w-110 bg-green-500 text-white rounded-xl border-b-4 font-nanum text-2xl border-black hover:bg-green-600"
                        onClick={handleSubmit}>Submit</button>
            </div>  
        </div>
        </section>
        </>
    )
}
export default Registration;