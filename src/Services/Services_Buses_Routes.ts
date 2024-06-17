const Url_Base = `https://localhost:7235/api`

const getBuses_Routes = async () => {
    const response = await fetch(`${Url_Base}/Bus_Routes`);
    return response.json();
  }

  const getPrice = async (from: string, to: string) => {
    if (from === to) {
      return 0;
    }
  
    const response = await fetch(`${Url_Base}/Bus_Routes/price?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
    if (!response.ok) {
      const data = await response.json();
      if (data.error === 'Same departure and arrival') {
        alert('Advertencia: El lugar de salida y destino son el mismo. El precio se mantendrá en 0.');
        return 0;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.text();
    if (!data) {
      throw new Error('No data returned from API');
    }
    return JSON.parse(data);
}
export {
    getBuses_Routes,
    getPrice

    }