import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPersonsTraveledByDate } from '@/Services/Services_Ticket';

interface CustomError {
  message: string;
}

export function useGetPersonsTraveledByDate(startDate: Date | null, endDate: Date | null) {
  const [persons, setPersons] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoading, isError } = useQuery(['personsTraveledByDate', startDate, endDate], async () => {
    if (!startDate || !endDate) {
      return null; 
    }

    try {
      const response = await getPersonsTraveledByDate(startDate, endDate);
      setPersons(response.personCount);
      return response.personCount;
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const errorMessage = (error as CustomError).message;
        console.error(error);
        setErrorMessage(errorMessage);
      }
      throw error;
    }
  }, {
    enabled: startDate instanceof Date && !isNaN(startDate.getTime()) && endDate instanceof Date && !isNaN(endDate.getTime()), 
    retry: false
  });

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setPersons(0);
    }
  }, [startDate, endDate]);

  return { persons, isLoading, isError, errorMessage };
}
