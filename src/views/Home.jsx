import "../css/views/home.css";
import { teaData } from "../teas";

function Home() {
  return (
    <>
      <HomePageHeader />
      <div className="teaDispaly">
        {teaData.map((teaData, id) => {
          return (
            <div className="card" key={id}>
              <Teas
                key={id}
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
      <div className="teaCard">
        <div className="category">{tags[0]}</div>
        <div className="teaName">{name}</div>
        <div className="teaImg"></div>
      </div>
    </div>
  );
};

export default Home;
