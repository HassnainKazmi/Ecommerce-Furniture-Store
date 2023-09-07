import "../styles/categories.css";
import bedroom from "../assets/images/bedroom.png";
import decor from "../assets/images/decor.png";
import livingroom from "../assets/images/living-room.png";
import office from "../assets/images/office.png";

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
        <div>
          <img src={bedroom} alt="Bedroom" />
          <h4 className="text-2xl font-bold dark:text-white">Bedroom</h4>
          <p className="text-gray-500 dark:text-gray-400">6 products</p>
        </div>
        <div>
          <img src={decor} alt="Decor" />
          <h4 className="text-2xl font-bold dark:text-white">Decor</h4>
          <p className="text-gray-500 dark:text-gray-400">9 products</p>
        </div>
        <div>
          <img src={livingroom} alt="Living Room" />
          <h4 className="text-2xl font-bold dark:text-white">Living Room</h4>
          <p className="text-gray-500 dark:text-gray-400">6 products</p>
        </div>
        <div>
          <img src={office} />
          <h4 className="text-2xl font-bold dark:text-white">Office</h4>
          <p className="text-gray-500 dark:text-gray-400">11 products</p>
        </div>
      </div>
    </section>
  );
};
export default Categories;
