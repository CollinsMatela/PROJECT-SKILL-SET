
const PendingLoading = () => {
    return(
        <div className="bg-green-500 w-full h-screen flex justify-center items-center">
            <div className="justify-center items-center flex gap-4">
                {/* <div className="bg-white h-12 w-12 animate-spin border-b-transparent border-green-500 border-2 rounded-full"></div> */}
                <div className="bg-white h-12 w-12 animate-spin rounded-md border-b-4 border-gray-300 justify-center items-center flex">
                      <div className="h-5 w-5 justify-center items-center flex font-nanum font-bold text-green-500 text-2xl">SS+</div>
               </div>
                <div>
                    <h1 className="text-2xl font-bold text-white">Status: Pending</h1>
                    <h1 className="text-lg text-white">Please wait for approval of your business registration.</h1>
                </div>
                
            </div>
        </div>
    )
}
export default PendingLoading;