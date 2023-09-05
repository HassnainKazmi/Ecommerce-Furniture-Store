import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Feedback from "./components/Feedback";
import Promotion from "./components/Promotion";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Content />
      <Categories />
      <FeaturedProducts />
      <Feedback />
      <Promotion />
    </>
  );
};

export default App;
