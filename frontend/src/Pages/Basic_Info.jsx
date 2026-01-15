import InputField from "../Components/InputField";
import { useState } from "react";

const Basic_Info = () => {
    return(
    <>
    <section className="h-screen w-full bg-gray-50 justify-center items-center flex">
        <div className=" bg-white w-1/4 rounded-2xl flex flex-col p-10">
             <div className=" mb-4 ">
                <h1 className="text-5xl font-bold font-nanum">Fill it up</h1>
            </div>  {/* Header*/}

            <label htmlFor="firstname" className="font-semibold text-gray-600 mb-4 text-md">Basic information</label>
            <div className="flex flex-col gap-4 mb-4"> {/* Account*/}
                <InputField label="Last Name"
                             type="text"
                             name="lastname"
                             placeholder="Enter your last name"
                             value={""}
                             onChange={""}
                            error={""}
                />
                <InputField label="First Name"
                             type="text"
                             name="firstname"
                             placeholder="Enter your first name"
                             value={""}
                             onChange={""}
                            error={""}
                />
                <InputField label="Middle Name"
                             type="text"
                             name="middlename"
                             placeholder="Enter your middle name"
                             value={""}
                             onChange={""}
                            error={""}
                />
                <InputField label="Birthdate"
                             type="date"
                             name="birthdate"
                             placeholder="Enter your birthdate"
                             value={""}
                             onChange={""}
                            error={""}
                />
                <div className="h-12 w-full justify-between items-center flex gap-2">
                    <button className="h-full w-full bg-gray-100 border-1 border-gray-200 rounded-md cursor-pointer text-gray-300 text-md font-bold hover:border-blue-500 hover:text-blue-500">Male</button>
                    <button className="h-full w-full bg-gray-100 border-1 border-gray-200 rounded-md cursor-pointer text-gray-300 text-md font-bold hover:border-pink-500 hover:text-pink-500">Female</button>
                </div>
            </div>

           

            <div className="flex-1 justify-end items-start flex"> {/* Buttons*/}
                <button className="h-12 w-110 bg-green-500 text-white rounded-xl border-b-4 font-nanum text-2xl border-black hover:bg-green-600"
                        onClick={""}>Submit</button>
            </div>  
        </div>
        </section>
    </>
    )
}
export default Basic_Info;