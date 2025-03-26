import React from 'react'
// import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/services/Layout';




function App() {
  return (
    <>
     <BrowserRouter>
<Routes>
<Route path="/" element={< Layout/>}>

</Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App