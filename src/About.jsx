import React from "react";
import Common from "./Common";
import Img_3 from "./img-3.svg";

const About = (props) => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgSrc={Img_3}
        visit="/contact"
        btnName="Contact Us"
      />
    </>
  );
};

export default About;
