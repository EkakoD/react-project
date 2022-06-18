import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from "react";
import './App.css';
import Barbers from './pages/barber/Barbers'
import Login from './pages/Login'
import RegisterClient from './pages/RegisterClient'
import RegisterBarber from './pages/RegisterBarber'
import BarberDetails from './pages/barber/BarberDetails'
import { AuthorizedRoutes, UnauthorizedRoutes } from './guard/authGuard';

function App() {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState(null);

  const handleLogOut = () => {

    setLoginUser(null);
  }

  const addLoginUser = (user) => {
    setLoginUser(user);
  }

  return (
    <div className="flex flex-col">
      <Routes>
        <Route path='*' element={<Navigate to="/login" />} />
        <Route path='/login' exact
          element={
            <UnauthorizedRoutes user={loginUser}>
              <Login addLoginUser={addLoginUser} />
            </UnauthorizedRoutes>} />
        <Route path='/registerclient' exact
          element={
            <UnauthorizedRoutes user={loginUser}>
              <RegisterClient addLoginUser={addLoginUser} />
            </UnauthorizedRoutes>} />
        <Route path='/registerbarber' exact
          element={
            <UnauthorizedRoutes user={loginUser}>
              <RegisterBarber addLoginUser={addLoginUser} />
            </UnauthorizedRoutes>} />

        <Route path='/barbers/:barberId' exact element={
          <AuthorizedRoutes user={loginUser}>
            <BarberDetails user={loginUser} logOut={handleLogOut} />
          </AuthorizedRoutes>
        } />
        <Route path='/barbers' exact element={
          <AuthorizedRoutes user={loginUser} >
            <Barbers user={loginUser} logOut={handleLogOut} />
          </AuthorizedRoutes>
        } />
      </Routes>
    </div >
  );
}

export default App;
