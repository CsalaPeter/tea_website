import { Link } from "react-router-dom";
import "../css/views/home.css";
import { teaData } from "../teas";

export default function Home() {
  console.log(teaData);
  return (
    <>
      <HomePageHeader />
      <div className="teaDispaly">
        {teaData.map((tea, key) => {
          return (
            <div className="card" key={key}>
              <Teas
                id={tea.id}
                name={tea.name}
                tags={tea.tags}
                brewTime={tea.brewTime}
                ingredients={tea.ingredients}
                description={tea.description}
                image={tea.image}
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

const Teas = ({ name, tags, ingredients, brewTime, description, image }) => {
  return (
    <div className="wrapper">
      <Link
        to="/tea"
        state={{ name, tags, ingredients, brewTime, description, image }}
      >
        <div className="teaCard">
          <div className="category">{tags[0]}</div>
          <div className="teaName">{name}</div>
          <div className="teaImg"></div>
        </div>
      </Link>
    </div>
  );
};
