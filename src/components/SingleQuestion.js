import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="question">
      <header onClick={() => setShowInfo(!showInfo)}>
        <h4>{title}</h4>
        <span onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <FaPlus />}
        </span>
      </header>
      {showInfo && <p>{info}</p>}
    </section>
  );
};

export default SingleQuestion;
