import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getTotalCollectedByDate } from '@/Services/Services_Ticket';

interface CustomError {
  message: string;
}

export function useGetTotalCollectedByDate(startDate: Date | null, endDate: Date | null) {
  const [totalCollected, setTotalCollected] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoading, isError } = useQuery(['totalCollectedByDate', startDate, endDate], async () => {
    if (!startDate || !endDate) {
      return null; 
    }

    try {
      const response = await getTotalCollectedByDate(startDate, endDate);
      setTotalCollected(response.totalCollected);
      return response.totalCollected;
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
      setTotalCollected(0);
    }
  }, [startDate, endDate]);

  return { totalCollected, isLoading, isError, errorMessage };
}
