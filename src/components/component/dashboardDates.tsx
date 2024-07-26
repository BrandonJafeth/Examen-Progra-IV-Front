
import { useForm } from 'react-hook-form';
import { useGetPersonsTraveledByDate } from '@/Hooks/useGetPersonsTraveledByDate';
import { useGetTotalCollectedByDate } from '@/Hooks/useGetPersonsTotalColletedByDate';
import FormData from '../../types/FormData';

function DashboardDates() {
  const { register, watch } = useForm<FormData>();
  const startDate = watch('startDate');
  const endDate = watch('endDate');
  const { persons, isLoading: isLoadingPersons, isError: isErrorPersons, errorMessage: errorMessagePersons } = useGetPersonsTraveledByDate(new Date(startDate), new Date(endDate));
  const { totalCollected, isLoading: isLoadingTotal, isError: isErrorTotal, errorMessage: errorMessageTotal } = useGetTotalCollectedByDate(new Date(startDate), new Date(endDate));

  return (

    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white rounded shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Dashboard Dates</h2>
        <form className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Start Date:</span>
            <input type="date" {...register('startDate')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200" />
          </label>
          <label className="block">
            <span className="text-gray-700">End Date:</span>
            <input type="date" {...register('endDate')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200" />
          </label>
        </form>
        <div className="space-y-4">
          <div>
            <span className="text-gray-700">Persons Traveled By Date:</span>
            {isLoadingPersons && <p>Loading...</p>}
            {isErrorPersons && <p>Error: {errorMessagePersons}</p>}
            <p>{persons}</p>
          </div>
          <div>
            <span className="text-gray-700">Total Collected By Date:</span>
            {isLoadingTotal && <p>Loading...</p>}
            {isErrorTotal && <p>Error: {errorMessageTotal}</p>}
            <p>{totalCollected}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDates;