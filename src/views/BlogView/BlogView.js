import "./BlogView.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";

function BlogView() {
  const { id } = useParams();

  const selectedData = blogs.find((blogObject) => blogObject.id === id);

  return (
    <>
      <h1 className="heading text-center">{selectedData.title}</h1>
      <img
        src={selectedData.image}
        alt="Recipeimg"
        className="recipe-img mx-auto d-block rounded-3 img-thumbnail mt-1 "
      />
      <div className="duration text-center mt-3 ">{selectedData.up}</div>
      <h4 className="recipe-description px-5 mt-2 mx-auto ">
        {selectedData.description}
      </h4>
      <h2 className="heading text-center text-white mt-5 mx-3 py-3 rounded-4 bg-secondary">
        {selectedData.ingredientTitle}
      </h2>

      <div className="ingredients-container mt-4">
        <ul className="ingredient-list bg-secondary text-white p-4 my-4 rounded-4 ">
          {selectedData.ingredients.length > 1 ? (
            selectedData.ingredients.map((element, i) => (
              <li className="h6 mx-3 my-2" key={i}>
                {element}
              </li>
            ))
          ) : (
            <p>No element available.</p>
          )}
        </ul>

        <img
          src={selectedData.ingredientImg} alt="Ingredient-img"
          className="ingredient-list rounded-4 my-4  img-thumbnail"
        />
      </div>

      <h2 className="heading text-center text-white mt-5 mx-3 py-3 rounded-4 bg-secondary">
        {" "}
        {selectedData.recipeName} Process
      </h2>

      <div className="recipe bg-secondary text-white p-4 h5 mt-3 mb-4 rounded-3 mx-auto">
        {selectedData.steps.map((element, i) => {
          return (
            <div className="steps m-1">
              <ul>
                <li>{element}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogView;
