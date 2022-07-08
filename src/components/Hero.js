import React from "react";
import heroImg from "../images/headerImage.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>
          Online learning is not the next big thing, it is the now big thing.
        </h1>
        <p className="desc">
          Come along with us and join the most happening community and stay upto
          date with the technologies
        </p>
        <button>Explore Courses</button>
      </div>
      <div className="img">
        <img src={heroImg} alt="hero Img" />
      </div>
    </section>
  );
};

export default Hero;
