
const MapNavigation = () => {
      return(
        <nav className="fixed z-[900] top-0 h-15 w-full justify-end items-center flex px-2">
            <ul className="flex gap-2">
                <li className="bg-white h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs" onClick={() => alert("Ongoing!")}>Service</li>
                <li className="bg-white h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs" onClick={() => alert("Ongoing!")}>Foods</li>
                <li className="bg-white h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs" onClick={() => alert("Ongoing!")}>Retail</li>
                <li className="bg-white h-8 w-20 rounded-xl justify-center items-center flex cursor-pointer hover:bg-gray-100 text-xs" onClick={() => alert("Ongoing!")}>Filter</li>
            </ul>
        </nav>
      )
}
export default MapNavigation;