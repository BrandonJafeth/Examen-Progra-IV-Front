// useBusesRoutes.ts
import { useQuery } from 'react-query';
import { getBuses_Routes } from '../Services/Services_Buses_Routes';

const useBusesRoutes = () => {
  return useQuery('busesRoutes', getBuses_Routes);
}

export default useBusesRoutes;