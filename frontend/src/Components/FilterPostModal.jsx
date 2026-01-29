import PostCard from "../Components/PostCard";
const FilterPostModal = ({onClose, filteredPostings}) =>{
    return(
        <>
        <section className="fixed inset-0 z-50 justify-center items-center flex flex-col">
            <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

                <div className="relative h-20 w-3xl justify-center items-center flex">
                    <h1 className="text-2xl text-white font-bold">Filtered Post</h1>
                </div>
            <div className="relative max-w-150 w-full max-h-[80vh]">
                
                <div className="h-full w-full space-y-2 bg-gray-100 overflow-y-scroll">
                    {filteredPostings.length === 0 ? 
                    (
                        <h1 className="text-white justify-center items-center flex h-20">No Posting Found!</h1>
                    ) : 
                    (
                        filteredPostings.map((post) => (
                            <div className="bg-white h-100 w-full" key={post?.postingId}></div>
                                                        ))
                    )
                    }
                </div>
                
              
            </div>
            
        </section>
        </>
    )
}
export default FilterPostModal;