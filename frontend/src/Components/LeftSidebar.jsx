
const LeftSidebar = () =>{
    return(
        <aside className="abosolute fixed z-50 bg-white justify-start items-center flex flex-col h-220 w-100 left-0 top-15 border-r-2 border-gray-100 pl-20 pr-2 pt-10">
            <h1 className="font-nanum justify-items-start w-full font-bold text-4xl text-green-500 mb-4">SKILL SET+</h1>
            <button className="h-12 w-full justify-items-start bg-white rounded-md hover:bg-gray-100 cursor-pointer mb-2 pl-2">
                <h1 className="">Home</h1>
            </button>
            <button className="h-12 w-full justify-items-start bg-white rounded-md hover:bg-gray-100 cursor-pointer mb-2 pl-2">
                <h1 className="">Search</h1>
            </button>
            <button className="h-12 w-full justify-items-start bg-white rounded-md hover:bg-gray-100 cursor-pointer mb-2 pl-2">
                <h1 className="">Messages</h1>
            </button>
            <button className="h-12 w-full justify-items-start bg-white rounded-md hover:bg-gray-100 cursor-pointer mb-2 pl-2">
                <h1 className="">Notification</h1>
            </button>
        </aside>
    )
}
export default LeftSidebar