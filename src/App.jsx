import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/partials/header';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
     <Header />

     <Routes>
        <Route path="/" />
     </Routes>
    </div>
  );
}

export default App;
