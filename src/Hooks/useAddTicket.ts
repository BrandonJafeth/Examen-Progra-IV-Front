import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { addTicket } from '../Services/Services_Ticket';
import Ticket from "@/types/Ticket";

interface FormData {
  from: string;
  to: string;
  date: string;
}

const useAddTicket = () => {
  const { register, handleSubmit,watch } = useForm<FormData>();
  const mutation = useMutation(addTicket);

  const OnSubmit = handleSubmit(async (data) => {
    const ticketData: Ticket = 
    {
      from: data.from,
      to: data.to,
      date_Ticket: data.date,
    }
      console.log(ticketData); 
    try {
      await mutation.mutateAsync(ticketData);
    } catch (error) {
      console.error(error);
    }
  });

  return { register, OnSubmit,watch };
};

export { useAddTicket };