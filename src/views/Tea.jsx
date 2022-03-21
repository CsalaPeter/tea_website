import { useLocation } from 'react-router-dom';
import '../css/views/tea.css';

export default function Tea() {
  let { state } = useLocation();
  console.log(state);
  const teaTags = state.tags.map((tags, key) => (
    <li className="tag" key={key}>
      {tags}
    </li>
  ));
  const teaIngredients = state.ingredients.map((ingredients, key) => (
    <li className="ingredient" key={key}>
      {ingredients}
    </li>
  ));

  return (
    <>
      <div className="teaDetail">
        <TeaPageHeader name={state.name} />
        <TeaDetail image={state.image} brewTime={state.brewTime} tags={teaTags} ingredients={teaIngredients} />
      </div>
    </>
  );
}

const TeaPageHeader = ({ name }) => {
  return (
    <header>
      <h1 className="nameHeader">{name}</h1>
    </header>
  );
};

const TeaDetail = ({ tags, ingredients, brewTime, image }) => {
  return (
    <div className="detailView">
      <div className="picture">
        <img src={process.env.PUBLIC_URL + image} alt="Végre jó" className="teaImg"></img>
      </div>
      <div className="stringData">
        <h3>Tags</h3>
        <div id="tags" className="stringDetail">
          <ul className="tagList"> {tags} </ul>
        </div>
        <h3>Ingredients</h3>
        <div id="ingredients" className="stringDetail">
          <ul className="ingredientsList">{ingredients}</ul>
        </div>
        <h3>Brewing Time</h3>
        <div id="brewTime" className="stringDetail">
          {brewTime}
        </div>
      </div>
    </div>
  );
};
