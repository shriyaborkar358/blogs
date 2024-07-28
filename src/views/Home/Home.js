import blogs from "../../data";
import "./Home.css";
import BlogCard from "../../components/BlogCard/BlogCard";

function Home() {
  return (
    <>
    <h1 className="heading">Recipe Blog</h1>
    <div className="blog-card-conatiner">
      {blogs.map((blogObject, i) => {
        const {
          id,
          title,
          up,
          image,
          description,
          time,
          categories,
          recipeName,
          descriptiontitle,
          recipe,
          ingredientTitle,
          ingredients,
          steps,
          ingredientimg,
        } = blogObject;

        return (
          <BlogCard
            id={id}
            key={i}
            title={title}
            up={up}
            image={image}
            description={description}
            time={time}
            categories={categories}
            recipeName={recipeName}
            descriptiontitle={descriptiontitle}
            recipe={recipe}
            ingredientTitle={ingredientTitle}
            ingredients={ingredients}
            steps={steps}
            ingredientimg={ingredientimg}
            
          />
        );
      })}
    </div>
    </>
  );
}

export default Home;
