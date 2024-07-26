import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPersonsTraveledByRoute } from '@/Services/Services_Ticket';


export function useGetPersonsTraveledByRoute(departureRoute: string, destinationRoute: string) {
  const [persons, setPersons] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { isLoading, isError } = useQuery(['personsTraveledByRoute', departureRoute, destinationRoute], async () => {
    if (departureRoute && destinationRoute) {
      try {
        const response = await getPersonsTraveledByRoute(departureRoute, destinationRoute);
        setPersons(response.personCount);
        return response.personCount;
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
        throw error;
      }
    }
    return null;
  }, {
    enabled: !!departureRoute && !!destinationRoute,
    retry: false
  });

  useEffect(() => {
    if (departureRoute === destinationRoute) {
      setPersons(0);
    }
  }, [departureRoute, destinationRoute]);

  return { persons, isLoading, isError, errorMessage };
}
