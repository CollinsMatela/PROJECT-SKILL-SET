import InputField from "../Components/InputField";
import { useState } from "react";
const Registration = () => {

    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});


    return(
        <section className="h-screen w-full bg-green-50 justify-center items-center flex">
        <div className=" bg-white w-3/4 rounded-2xl flex flex-col p-10">
             <div className=" mb-4 ">
                <h1 className="text-5xl font-bold font-nanum">Create your Account!</h1>
            </div>  {/* Header*/}

            <label htmlFor="firstname" className="font-semibold text-gray-600 mb-4 text-xl">Personal information</label>
            <div className="bg-white flex justify-between gap-4 mb-4"> {/* Fullname*/}
                
                <InputField label="Lastname"
                             type="text"
                             name="lastname"
                             placeholder="Enter your lastname"
                             value={lastname}
                             onChange={(e) => {setLastname(e.target.value)}}
                            errors={errors.lastname}
                />
                <InputField label="Firstname"
                             type="text"
                             name="firstname"
                             placeholder="Enter your firstname"
                             value={lastname}
                             onChange={(e) => {setFirstname(e.target.value)}}
                            errors={errors.firstname}
                />
                <InputField label="Middlename"
                             type="text"
                             name="middlename"
                             placeholder="Enter your middlename"
                             value={middlename}
                             onChange={(e) => {setMiddlename(e.target.value)}}
                            errors={errors.middlename}
                />
            </div> 
            <label htmlFor="firstname" className="font-semibold text-gray-600 mb-4 text-xl">Account information</label>
            <div className="flex gap-4 mb-4"> {/* Account*/}
                <InputField label="Email address"
                             type="email"
                             name="email"
                             placeholder="Enter your email (e.g xxx@gmail.com)"
                             value={email}
                             onChange={(e) => {setEmail(e.target.value)}}
                            errors={errors.email}
                />
                <InputField label="Password"
                             type="password"
                             name="password"
                             placeholder="Enter your password"
                             value={password}
                             onChange={(e) => {setPassword(e.target.value)}}
                            errors={errors.password}
                />
                <InputField label="Confirm password"
                             type="password"
                             name="password"
                             placeholder="Enter your confirm password"
                             value={confirmpassword}
                             onChange={(e) => {setConfirmPassword(e.target.value)}}
                            errors={errors.confirmpassword}
                />
            </div>
            <div className="flex gap-2 mb-8">
                <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="w-4 h-4"
                />
                <label htmlFor="terms" className="text-gray-700 text-sm">I agree to the{" "}
                    <a href="/terms" className="text-blue-500 underline hover:text-blue-600">Terms and Conditions</a>{" "}
                    and{" "}<a href="/privacy" className="text-blue-500 underline hover:text-blue-600">Privacy Policy</a>. 
                </label>
            </div>
           

            <div className="flex-1 justify-end items-start flex">
                <button className="h-12 w-110 bg-green-500 text-white rounded-xl border-b-4 font-nanum text-2xl border-black hover:bg-green-600">Submit</button>
            </div>  {/* Buttons*/}
        </div>
        </section>
    )
}
export default Registration;