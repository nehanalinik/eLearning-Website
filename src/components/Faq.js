import React, { useState } from "react";
import underline from "../images/underline.png";
import FaqHelper from "../Helper/FaqHelper";
import SingleQuestion from "./SingleQuestion";

const Faq = () => {
  const [questions, setQuestions] = useState(FaqHelper);

  return (
    <section className="faq">
      <div className="heading">
        <h2>FAQs</h2>
        <div className="underline">
          <img src={underline} alt="underline" />
        </div>
      </div>
      <div className="content">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
      <div className="bg_img"></div>
    </section>
  );
};

export default Faq;
