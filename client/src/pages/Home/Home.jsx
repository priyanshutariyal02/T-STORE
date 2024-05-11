import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider.jsx";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts.jsx";
import Catogories from "../../components/Categories/Categories.jsx";
import Contact from "../../components/Contact/Contact.jsx";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type="featured" />
      <Catogories />
      <FeatureProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
