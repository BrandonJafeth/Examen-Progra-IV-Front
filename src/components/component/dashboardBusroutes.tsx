
import { useForm } from 'react-hook-form';
import useBusesRoutes from "../../Hooks/useBuses_Routes";
import { useGetPersonsTraveledByRoute } from '@/Hooks/usegetPersonsTraveledByRoute';
import { useGetTotalCollectedByRoute } from '@/Hooks/usegetTotalCollectedByRoute';
import Bus_Routes from "../../types/Bus_Routes";

 function DashboardBusRoutes() {
  const { register, watch } = useForm();
  const from = watch('from');
  const to = watch('to');

  const { data: routes } = useBusesRoutes();
  const { persons, isLoading: isLoadingPersons, isError: isErrorPersons, errorMessage: errorMessagePersons } = useGetPersonsTraveledByRoute(from, to);
  const { total, isLoading: isLoadingTotal, isError: isErrorTotal, errorMessage: errorMessageTotal } = useGetTotalCollectedByRoute(from, to);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Dashboard Bus Routes</h2>
        <form className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Departure location:</span>
            <select {...register('from')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200">
              {routes?.map((route: Bus_Routes) => (
                <option key={route.id_Bus_Routes} value={route.from}>
                  {route.from}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Arrival location:</span>
            <select {...register('to')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200">
              {routes?.map((route: Bus_Routes) => (
                <option key={route.id_Bus_Routes} value={route.to}>
                  {route.to}
                </option>
              ))}
            </select>
          </label>
        </form>
        <div className="space-y-4">
          <div>
            <span className="text-gray-700">Persons Traveled By Route:</span>
            {isLoadingPersons && <p>Loading...</p>}
            {isErrorPersons && <p>Error: {errorMessagePersons}</p>}
            <p>{persons}</p>
          </div>
          <div>
            <span className="text-gray-700">Total Collected By Route:</span>
            {isLoadingTotal && <p>Loading...</p>}
            {isErrorTotal && <p>Error: {errorMessageTotal}</p>}
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default DashboardBusRoutes;