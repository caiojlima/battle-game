import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Battle from "./pages/Battle.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/battle" element={ <Battle /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
