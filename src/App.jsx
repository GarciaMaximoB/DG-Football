import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={HomePage}/>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
