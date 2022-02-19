
import './App.css';
import MainDashboard from './components/dashboard/MainDashboard';
import { Container } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <BrowserRouter>
          <Routes>
            <Route exact path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route exact path="/dashboard" element={<MainDashboard />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
