import { Routes, Route } from 'react-router-dom';
import './App.css';


import Header from './components/partials/Header';
import Beverages from './components/beverages/Beverages';
import BeverageDetails from './components/beverage/BeverageDetails';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
     <Header />

     <Routes>
        <Route path="/" />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/beverages/:beverageId" element={<BeverageDetails />} />
     </Routes>
    </div>
  );
}

export default App;
