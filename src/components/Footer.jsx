import React from "react";
import styles from "../style";

const Footer = () => {
  return (
    <footer className="bg-raisin_black text-white text-ff_inter py-[40px]">
      <div
        className={`${styles.maxContainer} bg-eerie_black_3 mx-[15px] md:px-[40px] p-[20px] md:flex md:items-center md:justify-between md:gap-[40px]`}
      >
        <ul className="flex justify-center flex-wrap gap-y-[5px] gap-x-[40px] md:mb-0 mb-[15px]">
          <li>
            <a href="/" className="text-white_50 underline">
              Term of Use
            </a>
          </li>
          <li>
            <a href="/" className="text-white_50 underline">
              Privacy & Policy
            </a>
          </li>
        </ul>
        <p className="flex max-w-max text-center mx-0">
          Copyright 2022{" "}
          <a href="/" className="inline-block underline mx-5">
            codewithsadee.
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
