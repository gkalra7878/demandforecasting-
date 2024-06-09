import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home"; 
import Forecast from "./pages/forecast";
import ForecastSearch from "./pages/forecastsearch"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/search" element={< ForecastSearch/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
