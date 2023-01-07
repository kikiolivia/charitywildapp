import React from "react";
import styles from "../style";
import { patnerList } from "../constants";

const Patner = () => {
  return (
    <section className="py-[80px] bg-baby_powder">
      <div
        className={`${styles.maxContainer} flex flex-wrap lg:justify-evenly justify-center items-center gap-[50px]`}
      >
        {patnerList.map((item) => (
          <a href="/" className="group">
            <img
              src={item.image}
              width={item.width}
              height={item.height}
              loading="lazy"
              alt={item.title}
              className="block group-hover:hidden"
            />
            <img
              src={item.imageActive}
              width={item.width}
              height={item.height}
              loading="lazy"
              alt={item.title}
              className="hidden group-hover:block"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Patner;
