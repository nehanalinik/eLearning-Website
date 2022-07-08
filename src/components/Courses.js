import React, { useState } from "react";
import underline from "../images/underline.png";
import CoursesList from "./CoursesList";
import Categories from "./Categories";
import CoursesHelper from "../Helper/CoursesHelper";

const allCategories = [
  "all",
  ...new Set(CoursesHelper.map((item) => item.category)),
];

const Courses = () => {
  const [courseList, setCourseList] = useState(CoursesHelper);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setCourseList(CoursesHelper);
      return;
    }
    const newItems = CoursesHelper.filter((item) => item.category === category);
    setCourseList(newItems);
  };

  return (
    <section className="courses">
      <div className="heading">
        <h2>Courses</h2>
        <div className="underline">
          <img src={underline} alt="underline" />
        </div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <CoursesList items={courseList} />
      <div className="bg_img"></div>
    </section>
  );
};

export default Courses;
