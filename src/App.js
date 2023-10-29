import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Hollywood from "./components/Hollywood";
import Tollywood from "./components/Tollywood";
import Bollywood from "./components/Bollywood";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/tollywood" element={<Tollywood />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
