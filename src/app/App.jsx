import "../css/App.css";
import MainNavbar from "../components/MainNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Tea from "../views/Tea";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/tea" element={<Tea />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
