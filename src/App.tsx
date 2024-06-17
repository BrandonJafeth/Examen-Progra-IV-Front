
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css'
import { Navbar } from './components/component/navbar';

import TicketPage from './Pages/Ticket';
import { CardDashboard } from './components/component/card-dashboard';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <TicketPage/>
        <CardDashboard/>

      </Router>
    </QueryClientProvider>
  );
}
export default App;