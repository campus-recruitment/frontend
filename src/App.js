
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
import EditProfile from './components/profile/EditProfile';
import Header from './components/Header';
import ThemeHeader from './components/ThemeHeader';
import { UserContext } from './contexts/userContext'
import { useState } from 'react';
import Cookies from 'js-cookie';
import Switching from './components/Switching';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminRoute from './privateRouting/AdminRoute';
import StudentRoute from './privateRouting/StudentRoute';

function App() {

  const setUser = (token) => {
    setUserState(prevState => {
      return {
        ...prevState,
        user: { token: token.token, ...token.user }
      }
    })
  }

  let token = Cookies.get("token")
  if (token) {
    token = JSON.parse(token)
  }
  const [userState, setUserState] = useState({
    user: token ? { token: token.token, ...token.user } : {},
    setUser: setUser
  })

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <BrowserRouter>
          {/* <Header />
          <ThemeHeader /> */}
            <Routes>
              <Route exact path="/" element={<Register />} />
              <Route exact path="/switch" element={<Switching />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/dashboard" element={
                <StudentRoute>
                  <MainDashboard />
                </StudentRoute>
              } />
              <Route exact path="/edit-profile" element={
                <StudentRoute>
                  <EditProfile />
                </StudentRoute>
              } />
              <Route exact path="/admin-dashboard" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
