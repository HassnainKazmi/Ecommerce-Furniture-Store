import "../styles/categories.css";
import { categories } from "../assets/data/data";

const Categories = () => {
  return (
    <section className="categories-main-container">
      <h2 className="text-4xl font-bold dark:text-white">Shop by Category</h2>
      <hr
        style={{
          borderColor: "#c19a83",
          width: "20%",
          margin: "0rem auto 2rem auto",
        }}
      ></hr>
      <div className="categories-container">
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <img src={category.image} alt="Bedroom" />
              <h4 className="text-2xl font-bold dark:text-white">
                {category.productName}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {category.quantity}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Categories;
