import "../css/App.css";
import MainNavbar from "../components/MainNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ingredients from "../views/Ingredients";
import Mixes from "../views/TeaMixes";
import Home from "../views/Home";

function App() {
  return (
    <div>
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/ingredients" component={Ingredients}></Route>
          <Route path="/mixes" component={Mixes}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
