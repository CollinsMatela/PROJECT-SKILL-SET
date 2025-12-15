import DashboardNav from "../Components/DashboardNav"

const Dashboard = () =>{
      return(
      <>
      <main>
        <DashboardNav/>
        <section className="bg-white h-500 w-full flex flex-col justify-start items-center px-20">
          
          <div className="bg-green-100 h-100 w-full justify-center items-center flex flex-col">
            <h1 className="font-bold text-2xl text-gray-900">Welcome back! 🎉</h1>
            <h1 className="font-bold text-2xl text-gray-900">Ready to share your skills or find someone awesome today?</h1>
          </div>
                
            
           
        </section>
      </main>
      </>
      )
}
export default Dashboard