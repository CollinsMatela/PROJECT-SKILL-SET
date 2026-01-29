
const FilterPostModal = ({onClose, filteredPostings}) =>{
    return(
        <>
        <section className="fixed inset-0 z-50 justify-center items-center flex">
            <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

            <div className="relative max-w-3xl w-full max-h-[80vh] justify-center items-start flex flex-col">
                <div className="h-20 w-full justify-center items-center flex rounded-xl">
                    <h1 className="text-2xl text-white font-bold">Filtered Post</h1>
                </div>
                <div className="h-200 w-full space-y-2 overflow-y-scroll">
                    {filteredPostings.length === 0 ? 
                    (
                        <h1 className="text-white justify-center items-center flex h-20">No Posting Found!</h1>
                    ) : 
                    (
                        filteredPostings.map((post) => (
                                                                <div className="bg-white h-100 w-full">

                                                                </div>
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