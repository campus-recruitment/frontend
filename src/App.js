
import './App.css';
import MainDashboard from './components/dashboard/MainDashboard';
import { Container } from '@mui/material';
import Header from './components/Header';
import ThemeHeader from './components/ThemeHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeHeader />
      <Container maxWidth="lg">
        <MainDashboard />
      </Container>
    </div>
  );
}

export default App;
