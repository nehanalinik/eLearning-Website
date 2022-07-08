import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsBookHalf,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FeatureHelper } from "../Helper/FeatureHelper";
import underline from "../images/underline.png";

const Features = () => {
  return (
    <section className="features">
      <div className="heading">
        <h2>Features</h2>
        <div className="underline">
          <img src={underline} alt="underline" />
        </div>
      </div>
      <div className="feature-courses">
        {FeatureHelper.map((item, key) => (
          <div className="courses" key={item.title}>
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="content">
              <div className="title-coursetype">
                <h3>{item.title}</h3>
                <h2>{item.courseType}</h2>
              </div>
              <div className="lessons">
                <BsBookHalf style={{ color: "#FFF" }} size={18} />
                <span>
                  {item.lessons}
                  <p>Lessons</p>
                </span>
              </div>
              <div className="studentsEnrolled-rating-play">
                <div className="studentsEnrolled">
                  <BsFillPeopleFill style={{ color: "#FFF" }} size={18} />
                  <span>{item.students} students enrolled</span>
                </div>
                <div className="rating">
                  <span>{item.rating}</span>
                  <div className="rating-icons">
                    <FaStar style={{ color: "#FFF" }} size={20} />
                    <FaStar style={{ color: "#FFF" }} size={20} />
                    <FaStar style={{ color: "#FFF" }} size={20} />
                    <FaStar style={{ color: "#FFF" }} size={20} />
                    <FaStarHalfAlt style={{ color: "#FFF" }} size={20} />
                  </div>
                  <span>({item.totalRating})</span>
                </div>
                <div className="play">
                  <BsFillArrowRightCircleFill
                    style={{ color: "#FFF" }}
                    size={32}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg_img">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Features;
