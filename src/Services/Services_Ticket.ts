import Ticket from "@/types/Ticket";

const Url_Base = `https://localhost:7235/api/Ticket`;

const addTicket = (dtoTicket: Ticket) => fetch(`${Url_Base}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dtoTicket),
}).then(response => {
  if (!response.ok) {
    return response.json().then(err => {
      if (err.message === 'Ruta al máximo de capacidad') {
        throw new Error('La ruta ha alcanzado su capacidad máxima. Por favor, inténtalo de nuevo más tarde.');
      } else {
        throw new Error('No se puede elegir la misma ruta de salida y de llegada asi que se mentiene en 0');
      }
    });
  }
  alert('Ticket agregado con éxito');
  return response.json();
}).catch(error => {
  console.error('Ha ocurrido un error:', error);
  alert(error.message);
});

  const getPersonsTraveledByRoute = async (departureRoute: string, destinationRoute: string) => {
    const response = await fetch(`${Url_Base}/PersonsByRoute?departureRoute=${departureRoute}&destinationRoute=${destinationRoute}`);
    if (!response.ok) {
      throw new Error('Error fetching persons traveled by route');
    }
    const data = await response.json();
    return data; 
  }
  
  
  const getPersonsTraveledByDate = async (startDate: Date | null, endDate: Date | null) => {
    if (!startDate || !endDate) {
      return null; 
    }
  
    const formattedStartDate = startDate.toISOString();
    const formattedEndDate = endDate.toISOString();
  
    try {
      const response = await fetch(`${Url_Base}/PersonsByDate?startDate=${formattedStartDate}&endDate=${formattedEndDate}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching persons traveled by date:', error);
      throw error;
    }
  };
  
  
  
  const getTotalCollectedByRoute = async (departureRoute: string, destinationRoute: string) => {
    const response = await fetch(`${Url_Base}/TotalCollectedByRoute?departureRoute=${departureRoute}&destinationRoute=${destinationRoute}`);
    if (!response.ok) {
      throw new Error('Error fetching total collected by route');
    }
    const data = await response.json();
    return data;
  };
  
  
  const getTotalCollectedByDate = async (startDate: Date | null, endDate: Date | null) => {
    if (!startDate || !endDate) {
      return null; 
    }
  
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];
  
    try {
      const response = await fetch(`${Url_Base}/TotalCollectedByDate?startDate=${formattedStartDate}&endDate=${formattedEndDate}`);
      if (!response.ok) {
        throw new Error('Error fetching total collected by date');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching total collected by date:', error);
      throw error;
    }
  };
  
  
export {
  getPersonsTraveledByDate,
  getPersonsTraveledByRoute,
  getTotalCollectedByDate,
  getTotalCollectedByRoute,
    addTicket

    }