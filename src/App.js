import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Barbers from './pages/barber/Barbers'
import Login from './pages/Login'

// import Barber from './pages/barber/Barber'
// import BarberDetails from './pages/barber/BarberDetails'
function App() {



  return (
    <div className="flex flex-col">
      <Routes>
        <Route path='*' element={<Navigate to="/login" />} />
        <Route path='/login' exact
          element={<Login />} />
        {/* <Route path='/register' exact 
        element={<Register />} />  */}
        {/* <Route path='/barbers/:barberId' exact element={<BarberDetails />} /> */}
        <Route path='/barbers' exact element={<Barbers />} />
      </Routes>
    </div>
  );
}

export default App;
