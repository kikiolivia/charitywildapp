import React from "react";
import styles from "../style";
import { featuresLists } from "../constants";

const Features = () => {
  return (
    <section className="lg:mt-[-180px] lg:pt-0 md:pt-[80px] pt-0 lg:bg-transparent bg-eerie_black_1 section ">
      <div className={`${styles.maxContainer}`}>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
          {featuresLists.map((menuItem) => {
            const { id, title, Icon } = menuItem;
            return (
              <li key={id} className="flex flex-start gap-[25px]">
                <div className="text-pistachio text-[5.5rem] mb-[10px]">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-white text-fs_6 mb-[10px]">{title}</h3>
                  <p className="max-w-[25ch] text-white_50 text-fs_9">
                    Sit amet consecte adiscine eiusm temor ultrices.
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
