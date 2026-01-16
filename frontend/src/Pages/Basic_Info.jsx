import InputField from "../Components/InputField";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const Basic_Info = () => {

    const {setUserProfile} = useContext(AuthContext);

    const navigate = useNavigate();
    const {accountId} = useParams();

    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [maleButtonActive, setMaleButtonActive] = useState(false);
    const [femaleButtonActive, setFemaleButtonActive] = useState(false);

    const handleSubmit = async () => {
          const details = {accountId, lastname, firstname, middlename, birthdate, gender};
          try {
              const res = await axios.post(`${import.meta.env.VITE_API_URL}/basic-info`, details);
              console.log(res.data.message);
              if(res.data.user){
                 navigate(`/dashboard/${accountId}`);
                 setUserProfile(res.data.user);
              }
          } catch (error) {
              console.log(error);
          }
    };

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
                             value={lastname}
                             onChange={(e) => {setLastname(e.target.value)}}
                            error={""}
                />
                <InputField label="First Name"
                             type="text"
                             name="firstname"
                             placeholder="Enter your first name"
                             value={firstname}
                             onChange={(e) => {setFirstname(e.target.value)}}
                            error={""}
                />
                <InputField label="Middle Name"
                             type="text"
                             name="middlename"
                             placeholder="Enter your middle name"
                             value={middlename}
                             onChange={(e) => {setMiddlename(e.target.value)}}
                            error={""}
                />
                <InputField label="Birthdate"
                             type="date"
                             name="birthdate"
                             placeholder="Enter your birthdate"
                             value={birthdate}
                             onChange={(e) => {setBirthdate(e.target.value)}}
                            error={""}
                />
                <div className="h-12 w-full justify-between items-center flex gap-2">
                    <button className={`${maleButtonActive ? "bg-blue-300 text-white text-blue-500" : "bg-gray-100 border-1 border-gray-200 text-gray-300 hover:border-blue-500 hover:text-blue-500"} h-full w-full  rounded-md cursor-pointer text-md font-bold`}
                            onClick={() => {setGender("Male"), setMaleButtonActive(true), setFemaleButtonActive(false)}}>Male
                    </button>
                    <button className={`${femaleButtonActive ? "bg-pink-300 text-white text-pink-500" : "bg-gray-100 border-1 border-gray-200 text-gray-300 hover:border-pink-500 hover:text-pink-500"} h-full w-full  rounded-md cursor-pointer text-md font-bold`}
                            onClick={() => {setGender("Female"), setFemaleButtonActive(true), setMaleButtonActive(false)}}>Female
                    </button>
                </div>
            </div>

           

            <div className="flex-1 justify-end items-start flex"> {/* Buttons*/}
                <button className="h-12 w-110 bg-green-500 text-white rounded-xl border-b-4 font-nanum text-2xl border-black hover:bg-green-600 cursor-pointer"
                        onClick={handleSubmit}>Submit</button>
            </div>  
        </div>
        </section>
    </>
    )
}
export default Basic_Info;