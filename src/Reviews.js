import styles from "./Reviews.module.css";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

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
        <button onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
      <button>suprise me</button>
    </article>
  );
}

export default Reviews;
