import React from "react";
// import heroImg from "../images/headerImage.png";
import heroImg from "../images/HeroImg.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="content">
        <h1>
          Online learning is not the next big thing, it is the now big thing.
        </h1>
        <p className="desc">
          Come along with us and join the most happening community and stay upto
          date with the technologies
        </p>
        <button>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={-40}
            duration={1200}
          >
            Explore Courses
          </Link>
        </button>
      </div>
      <div className="img">
        <img src={heroImg} alt="hero Img" />
      </div>
    </section>
  );
};

export default Hero;
