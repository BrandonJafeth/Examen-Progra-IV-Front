import DashboardBusRoutes from "@/components/component/dashboardBusroutes";
import DashboardDates from "@/components/component/dashboardDates";


function Dashboard() {
  return (
    <>
    <div className="flex flex-row justify-center items-start min-h-screen bg-gray-100 p-4">
      <DashboardDates />
      <div className="mx-10">
      <DashboardBusRoutes />
        </div> 
     
    </div>
    </>

  
  );
}

export default Dashboard
