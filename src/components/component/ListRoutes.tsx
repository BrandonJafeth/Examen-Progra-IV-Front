import { UseFormRegister, UseFormWatch } from "react-hook-form";
import useBusesRoutes from "../../Hooks/useBuses_Routes";
import Bus_Routes from "../../types/Bus_Routes";
import { useGetPrice } from "@/Hooks/UseGetPrice";
import { useEffect } from "react";



const ListRoutes = ({ register, watch }: { register: UseFormRegister<Bus_Routes>, watch: UseFormWatch<Bus_Routes> }) => {
    const { data: busRoutes, refetch, error: routesError } = useBusesRoutes();
    const from = watch('from');
    const to = watch('to');
    const { price, isLoading, isError } = useGetPrice(from, to);

    // Manejo de errores
    if (isError) {
        console.error('Error al obtener el precio');
    }

    useEffect(() => {
        // Este código se ejecutará cada vez que cambien los valores de 'from' o 'to'
        console.log(`From: ${from}, To: ${to}`);
    }, [from, to]);

    return (
        <>
            <div className="flex flex-col w-full mb-4">
                <label className="mb-2">Departure Route</label>
                <select
                    className="w-full cursor-pointer text-gray-500 border rounded-md h-full border-gray-500 p-2"
                    {...register("from")}>
                    <option value="">Please Select a Departure Route</option>
                    {busRoutes?.map((route, index) => (
                        <option key={index} value={route.from}>
                            {route.from}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col w-full mb-4">
                <label className="mb-2">Arrival Route</label>
                <select
                    className="w-full cursor-pointer text-gray-500 border rounded-md h-full border-gray-500 p-2"
                    {...register("to")}>
                    <option value="">Please Select an Arrival Route</option>
                    {busRoutes?.map((route, index) => (
                        <option key={index} value={route.to}>
                            {route.to}
                        </option>
                    ))}
                </select>
            </div>
            {isLoading ? 'Loading...' : <div>Price: {price}</div>}
        </>
    );
}

export default ListRoutes;