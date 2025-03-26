import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import { Home } from "./pages/Home";


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
