import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPrice } from '@/Services/Services_Buses_Routes';
import { toast } from 'react-toastify';

interface CustomError {
  message: string;
}

export function useGetPrice(from: string, to: string) {
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoading, isError } = useQuery(['price', from, to], async () => {
    try {
      const response = await getPrice(from, to);
      setPrice(response);
      return response;
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const errorMessage = (error as CustomError).message;
        console.error(error);
        setErrorMessage(errorMessage);
      }
      throw error;
    }
  }, {
    enabled: from !== null && to !== null,
    retry: false
  });

  useEffect(() => {
    if (from === to) {
      setPrice(0);
      setErrorMessage('Advertencia: El lugar de salida y destino son el mismo. El precio se mantendrá en 0.');
      toast.error('Advertencia: El lugar de salida y destino son el mismo. El precio se mantendrá en 0.');
    }
  }, [from, to]);

  return { price, isLoading, isError, errorMessage };
}
