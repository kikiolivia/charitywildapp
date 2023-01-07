import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { instaList } from "../constants";
import styles from "../style";

const InstaPost = () => {
  return (
    <section>
      <ul className="insta-post-list">
        {instaList.map((item) => (
          <li key={item.id} className="insta-post-item">
            <a
              href="/"
              className="relative bg-eerie_black_1 overflow-hidden group"
            >
              <img
                src={item.image}
                width="320"
                height="300"
                loading="lazy"
                alt="Lion"
                class={`${styles.imgCover} ${styles.transitionOne} group-hover:scale-[1.1] group-hover:opacity-[0.5]`}
              />
              <IoLogoInstagram
                className={`text-white text-[5rem] absolute top-[50%] left-[50%] opacity-0 ${styles.transitionOne} group-hover:opacity-100`}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InstaPost;
