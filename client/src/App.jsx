
import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import "./index.css";



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

