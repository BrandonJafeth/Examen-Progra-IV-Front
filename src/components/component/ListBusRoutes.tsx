
import useBusesRoutes from "../../Hooks/useBuses_Routes";
import Bus_Routes from "../../types/Bus_Routes";
import { useGetPrice } from "@/Hooks/UseGetPrice";
import { useAddTicket } from '@/Hooks/useAddTicket';



export default function TicketForm() {
  const { data: routes } = useBusesRoutes();
  const { register, OnSubmit,watch } = useAddTicket();
  const from = watch('from');
  const to = watch('to');
  const { price, isLoading, isError, errorMessage } = useGetPrice(from, to);



return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="p-10 bg-white rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Bus Ticket</h2>
        <form onSubmit={OnSubmit} className="space-y-4">
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
            <label className="block">
                <span className="text-gray-700">Select the date:</span>
                <input
                    data-cy='date'
                    id='date'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200'
                    type='date'
                    {...register('date')}
                />
            </label>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Buy
            </button>
        {isLoading && <p>Loading price...</p>}
        {isError && <p>Error: {errorMessage}</p>}
        <p>Price: {price}</p>
    </form>
    </div>
    </div>
);
}