import styles from "./Reviews.module.css";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <article className={styles.review}>
      <div className={styles.image_container}>
        <img src={image} alt={name} className={styles.image_person}></img>
        <span className={styles.quote_icon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p>{job}</p>
      <p>{text}</p>
      <div>
        <button onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button>suprise me</button>
    </article>
  );
}

export default Reviews;
