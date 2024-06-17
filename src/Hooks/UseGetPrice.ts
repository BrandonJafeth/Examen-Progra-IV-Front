import { getPrice } from '@/Services/Services_Buses_Routes';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';



export function useGetPrice(from: string, to: string) {
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
  
    const { isLoading, isError } = useQuery(['price', from, to], () => getPrice(from, to), {
      enabled: !!from && !!to, 
      onSuccess: (data) => {
        setPrice(data);
      },
      onError: (error: unknown) => {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            const errorMessage = (error as { message: string }).message;
            if (errorMessage === 'Same departure and arrival') {
                setErrorMessage('Advertencia: El lugar de salida y destino son el mismo. El precio se mantendrá en 0.');
                setPrice(0);
            } else {
                console.error(error);
            }
        }
    }
    });
  
    useEffect(() => {
      if (from === to) {
        setPrice(0);
      }
    }, [from, to]);
  
    return { price, isLoading, isError, errorMessage };
}