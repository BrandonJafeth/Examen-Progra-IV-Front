const Url_Base = `https://localhost:7235/api`

const getBuses_Routes = async () => {
    const response = await fetch(`${Url_Base}/Bus_Routes`);
    return response.json();
  }
  const getPrice = async (from: string, to: string) => {

    const response = await fetch(`${Url_Base}/Bus_Routes/price?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };
  
export {
    getBuses_Routes,
    getPrice

    }