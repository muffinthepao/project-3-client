import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';


import Beverages from './components/beverages/Beverages';
import BeverageDetails from './components/beverage/BeverageDetails';
import Cart from './components/cart/Cart';
import Header from './components/partials/header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <Header />

     <Routes>
        <Route path="/" />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/beverages/:beverageId" element={<BeverageDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
     </Routes>

     <ToastContainer />
    </div>
  );
}

export default App;
