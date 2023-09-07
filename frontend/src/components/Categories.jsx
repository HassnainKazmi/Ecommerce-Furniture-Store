import "../styles/categories.css";

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
          <img src="./src/assets/images/bedroom.png?raw=true" alt="Bedroom" />
          <h4 className="text-2xl font-bold dark:text-white">Bedroom</h4>
          <p className="text-gray-500 dark:text-gray-400">6 products</p>
        </div>
        <div>
          <img src="./src/assets/images/decor.png" alt="Decor" />
          <h4 className="text-2xl font-bold dark:text-white">Decor</h4>
          <p className="text-gray-500 dark:text-gray-400">9 products</p>
        </div>
        <div>
          <img src="./src/assets/images/living-room.png" alt="Living Room" />
          <h4 className="text-2xl font-bold dark:text-white">Living Room</h4>
          <p className="text-gray-500 dark:text-gray-400">6 products</p>
        </div>
        <div>
          <img src="./src/assets/images/office.png" alt="Office" />
          <h4 className="text-2xl font-bold dark:text-white">Office</h4>
          <p className="text-gray-500 dark:text-gray-400">11 products</p>
        </div>
      </div>
    </section>
  );
};
export default Categories;
