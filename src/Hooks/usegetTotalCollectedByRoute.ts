import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getTotalCollectedByRoute } from '@/Services/Services_Ticket';


export function useGetTotalCollectedByRoute(departureRoute: string, destinationRoute: string) {
  const [total, setTotal] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { isLoading, isError } = useQuery(['totalCollectedByRoute', departureRoute, destinationRoute], async () => {
    if (departureRoute && destinationRoute) {
      try {
        const response = await getTotalCollectedByRoute(departureRoute, destinationRoute);
        setTotal(response.totalCollected);
        return response.totalCollected;
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
        throw error;
      }
    }
    return Promise.resolve(null);
  }, {
    enabled: !!departureRoute && !!destinationRoute,
    retry: false
  });

  useEffect(() => {
    if (departureRoute === destinationRoute) {
      setTotal(0);
    }
  }, [departureRoute, destinationRoute]);

  return { total, isLoading, isError, errorMessage };
}


