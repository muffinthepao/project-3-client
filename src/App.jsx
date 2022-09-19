import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';


import Beverages from './pages/beverages/Beverages';
import BeverageDetails from './pages/beverage/BeverageDetails';
import Cart from './pages/cart/Cart';
import Header from './components/partials/header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProfileTest from './pages/profile/ProfileTest';


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
        <Route path="/users/auth/login" element={<Login />} />
        <Route path="/users/auth/register" element={<Register />} />
        <Route path="/users/profile/:userId" element={<ProfileTest />} />
        <Route path="/users/:userId/cart" element={<Cart />} />
     </Routes>

     <ToastContainer />
    </div>
  );
}

export default App;
