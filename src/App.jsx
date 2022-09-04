import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/partials/Header';
import Listings from './components/listings/Listings';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
     <Header />
     <Listings />

     <Routes>
        <Route path="/" />
        <Route path="/listings" element={<Listings />} />
     </Routes>
    </div>
  );
}

export default App;
