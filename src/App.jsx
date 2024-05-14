import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PlayersPage from "./pages/PlayersPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/players" element={<PlayersPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
