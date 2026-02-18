
const UserTable = ({ users }) => {
    return (
        <>
         <div className="h-100 border-b-1 border-gray-300 hide-scrollbar w-300 mt-10 justify-start items-center flex flex-col gap-2">

                   <h1 className="w-full text-black font-bold">Registered Users Table</h1>
                   <div className=" bg-black h-10 w-full justify-between items-center flex rounded-md">
                    <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">No.</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Name</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Age</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">BirthDate</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Email</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Contact</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Ratings</h1></div>
                       <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Followers</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs text-white">Action</h1></div>
                   </div>
                   {users.map((user, index) => (
                    <div key={user.accountId} className="border-1 border-b-4 border-black rounded-xl h-15 w-full justify-between items-center flex">
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{index + 1}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user.firstname} {user.lastname}</h1></div>
                      <div className="h-full w-50 w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user.age}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user?.birthdate ? user.birthdate.split("T")[0] : "No Birthdate"}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user.email}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user.contact}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user.ratings}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2"><h1 className="text-xs">{user.followers}</h1></div>
                      <div className="h-full w-50 justify-start items-center flex p-2 gap-2">
                        
                        <button className="bg-gray-300 h-8 w-8 hover:w-full transition-all duration-300 ease-in-out rounded-md cursor-pointer"></button>
                        <button className="bg-black h-8 w-8 hover:w-full transition-all duration-300 ease-in-out rounded-md cursor-pointer"></button>
                        <button className="bg-black h-8 w-8 hover:w-full transition-all duration-300 ease-in-out rounded-md cursor-pointer"></button>
                      </div>
                      
                    </div>
                   ))}

            </div>
        </>
    )
}
export default UserTable;