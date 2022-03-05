import { Link } from "react-router-dom";
import "../css/views/home.css";
import { teaData } from "../teas";

export default function Home() {
  return (
    <>
      <HomePageHeader />
      <div className="teaDispaly">
        {teaData.map((teaData, key) => {
          return (
            <div className="card" key={key}>
              <Teas
                id={key}
                name={teaData.name}
                tags={teaData.tags}
                brewTime={teaData.brewTime}
                ingredients={teaData.ingredients}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

const HomePageHeader = () => {
  return (
    <header className="header">
      <h1>Welcome to Tea Time</h1>
    </header>
  );
};

const Teas = ({ name, tags, ingredients, brewTime }) => {
  return (
    <div className="wrapper">
      <Link to="/tea" state={[name, tags, ingredients, brewTime]}>
        <div className="teaCard">
          <div className="category">{tags[0]}</div>
          <div className="teaName">{name}</div>
          <div className="teaImg"></div>
        </div>
      </Link>
    </div>
  );
};
