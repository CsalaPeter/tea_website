import { useLocation } from "react-router-dom";
import "../css/views/tea.css";

export default function Tea() {
  let { state } = useLocation();
  console.log(state);
  const teaTags = state.tags.map((tags, key) => (
    <li className="tag" key={key}>
      {tags}
    </li>
  ));
  const teaIngredients = state.ingredients.map((ingredients, key) => (
    <li key={key}>{ingredients}</li>
  ));

  return (
    <>
      <div className="teaDet">
        <TeaPageHeader name={state.name} />
        <TeaDetail
          brewTime={state.brewTime}
          tags={teaTags}
          ingredients={teaIngredients}
        />
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

const TeaDetail = ({ tags, ingredients, brewTime }) => {
  return (
    <div className="detView">
      <div className="picture">
        <div></div>
      </div>
      <div className="stringData">
        <h3>Tags</h3>
        <div id="tags" className="stringDet">
          <ul className="tagList"> {tags} </ul>
        </div>
        <label htmlFor="ingredients">Ingredients:</label>
        <div id="ingredients" className="stringDet">
          {ingredients}
        </div>
        <label htmlFor="brewTime">Brewing Time:</label>
        <div id="brewTime" className="stringDet">
          {brewTime}
        </div>
      </div>
    </div>
  );
};
