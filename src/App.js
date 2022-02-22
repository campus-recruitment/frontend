
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
import EditProfile from './components/EditProfile';
import Header from './components/Header';
import ThemeHeader from './components/ThemeHeader';
import { UserContext } from './contexts/userContext'
import { useState } from 'react';

function App() {

  const setUser = (token) => {
    setUserState(prevState => {
      return {
        ...prevState,
        user: { token: token.token, ...token.user }
      }
    })
  }

  const [userState, setUserState] = useState({
    user: {},
    setUser: setUser
  })

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <BrowserRouter>
          <Header />
          <ThemeHeader />
          <Container maxWidth="lg">
            <Routes>
              <Route exact path="/register" element={<Register />} />
            </Routes>
            <Routes>
              <Route exact path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route exact path="/dashboard" element={<MainDashboard />} />
            </Routes>
            <Routes>
              <Route exact path="/edit-profile" element={<EditProfile />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
