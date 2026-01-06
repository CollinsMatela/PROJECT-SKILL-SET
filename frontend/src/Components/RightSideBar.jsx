
import Footer from "./Footer"

const RightSideBar = () =>{
    
    

    return(
        <aside className="fixed z-30 justify-start items-start flex flex-col h-100 w-80 right-20 top-25 border-r-2 border-gray-100 p-2 pt-8">
            <h1>Suggested for you!</h1>
            <Footer/>
        </aside>
        
    )
}
export default RightSideBar