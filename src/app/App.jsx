import "../css/App.css";
import MainNavbar from "../components/MainNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ingredients from "../views/Ingredients";
import Home from "../views/Home";

function App() {
  return (
    <div>
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/ingredients" element={<Ingredients />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
