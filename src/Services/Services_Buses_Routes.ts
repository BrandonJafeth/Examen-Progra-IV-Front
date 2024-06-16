const Url_Base = `https://localhost:7066/api`

const getBuses_Routes = async () => {
    const response = await fetch(`${Url_Base}/`);
    return response.json();
  }






export {
    getBuses_Routes

    }