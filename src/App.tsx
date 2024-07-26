
import { QueryClient, QueryClientProvider } from 
'react-query';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import './index.css'
import { Navbar } from './components/component/navbar';
import TicketPage from './Pages/Ticket';
import Dashboard from './Pages/Dashboard';
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/ticket" element={<TicketPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Navigate to="/ticket" />} />
        </Routes>
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;