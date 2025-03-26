import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Layout/Navbar';


function App() {
  return (
    <>
     <BrowserRouter>
<Routes>
<Route path="/" element={< Navbar/>}>
<Route index element={<Home />} />

</Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App