import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsBookHalf,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const CoursesList = ({ items }) => {
  return (
    <section className="courses_list">
      {items.map((courseItems) => {
        const {
          title,
          courseType,
          lessons,
          students,
          rating,
          totalRating,
          image,
        } = courseItems;
        return (
          <div className="coursesList" key={title}>
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="title_courseType">
                <h3>{title}</h3>
                <h2>{courseType}</h2>
              </div>
              <div className="lessons">
                <BsBookHalf style={{ color: "#FFF" }} size={18} />
                <span>
                  {lessons} <p>Lessons</p>
                </span>
              </div>
              <div className="studentsEnrolled-rating">
                <div className="studentsEnrolled">
                  <BsFillPeopleFill style={{ color: "#FFF" }} size={18} />
                  <span>{students} students enrolled</span>
                </div>
                <div className="rating">
                  <div className="rating_container">
                    <span>{rating}</span>
                    <div className="rating-icons">
                      <FaStar style={{ color: "#FFF" }} size={20} />
                      <FaStar style={{ color: "#FFF" }} size={20} />
                      <FaStar style={{ color: "#FFF" }} size={20} />
                      <FaStar style={{ color: "#FFF" }} size={20} />
                      <FaStarHalfAlt style={{ color: "#FFF" }} size={20} />
                    </div>
                    <span>{totalRating}</span>
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
          </div>
        );
      })}
    </section>
  );
};

export default CoursesList;
