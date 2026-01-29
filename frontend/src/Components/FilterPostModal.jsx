
const FilterPostModal = ({onClose}) =>{
    return(
        <>
        <section className="fixed inset-0 z-50 justify-center items-center flex">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

            <div className="relative h-full w-200 justify-center items-center flex pt-10">
                <div className="bg-white h-20 w-full justify-center items-center flex rounded-xl">
                    <h1 className="text-2xl font-bold">Filtered Post</h1>
                </div>
              
            </div>
            
        </section>
        </>
    )
}
export default FilterPostModal;