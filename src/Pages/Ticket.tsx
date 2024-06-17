import { useForm } from 'react-hook-form';
import ListRoutes from '../components/component/ListRoutes';
import  Bus_Routes  from '../types/Bus_Routes';

function TicketPage() {
  const { register, handleSubmit, watch } = useForm<Bus_Routes>();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListRoutes register={register} watch={watch}/>
      <input type="submit" />
    </form>
  );
}

export default TicketPage;