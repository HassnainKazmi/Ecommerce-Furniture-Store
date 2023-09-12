import FeaturedProducts from "./FeaturedProducts";
import "../styles/decor.css";
const Decor = () => {
  return (
    <section className="decor-main-container">
      <div className="decor-content">
        <p>
          <a href="">Home</a> / Decor
        </p>
        <h1>Decor</h1>
        <span>Showing all 9 result</span>
        <select
          id="SortItems"
          name="SortItems"
          style={{
            float: "right",
            backgroundImage: "none",
            border: "none",
            width: "15rem",
            padding: "0.45rem",
          }}
        >
          <option value="Default Sorting">Default Sorting</option>
          <option value="Sort by popularity">Sort by popularity</option>
          <option value="Sort by latest">Sort by latest</option>
          <option value="Sort by price: low to high">
            Sort by price: low to high
          </option>
          <option value="Sort by price: high to low">
            Sort by price: high to low
          </option>
        </select>
      </div>
      <FeaturedProducts />
    </section>
  );
};
export default Decor;
