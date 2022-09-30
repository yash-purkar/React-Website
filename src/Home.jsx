import React from "react";
import Common from "./Common";
import Img_4 from "./img-4.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgSrc={Img_4}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
