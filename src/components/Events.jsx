import React from "react";
import styles, { components } from "../style";
import subtitleImg from "../assets/subtitle-img-green.png";
import { BsHeart } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { eventList } from "../constants";

const Events = () => {
  return (
    <section className="py-[120px]">
      <div className={`${styles.maxContainer} lg:px-[30px]`}>
        <p
          className={`text-pistachio text-fs_8 font-roboto  ${styles.sectionSubtitle} mb-[10px] justify-center`}
        >
          <img src={subtitleImg} width="32" height="7" alt="Wavy Line" />
          <span>Event & Program</span>
          <img src={subtitleImg} width="32" height="7" alt="Wavy Line" />
        </p>
        <h2 className="lg:leading-[1.2] leading-[1.6] text-fs_3 text-eerie_black_1 mt-[10px] mb-[40px] text-center">
          Our Most Popular Causes For <strong>Building Fund</strong>
        </h2>
        <ul className="grid gap-[30px] mb-[70px]">
          {eventList.map((item) => (
            <li>
              <div className="flex ss:flex-row flex-col flex-start gap-[30px]">
                <div>
                  <time
                    className="bg-pistachio text-white leading-[1.3] max-w-max py-[10px] px-[20px] rounded-[8px] shadow-[0_10px_15px_hsla(86,45%,54%,0.5)]"
                    dateTime="01-05"
                  >
                    <span className="text-[2.1rem]">{item.month}</span>
                    <span className="text-fs_4">{item.date}</span>
                  </time>
                </div>
                <div
                  className={`md:flex md:grow md:justify-between items-center`}
                >
                  <div>
                    <p className="ss:mt-0 mt-[10px] mb-[5px] text-pistachio text-fs_8 font-fw_600 tracking-[-1px]">
                      Ocean Water
                    </p>
                    <h3 className="text-fs_5 text-eerie_black_1 tracking-[-1px] ss:leading-[1.4]">
                      Far from the countries Vokalia and Consonantia 2022
                    </h3>
                    <p className="text-ff_inter mt-[5px] md:mb-0 mb-[30px]">
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                    </p>
                  </div>

                  <button className={`${components.btnWhite}`}>
                    <span>View Events</span>
                    <BsArrowRightShort
                      className="text-fs_6"
                      stroke-width="0.5"
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className={`${components.btnSecondary} mx-auto`}>
          <span>Learn More About Us</span>
          <BsHeart />
        </button>
      </div>
    </section>
  );
};

export default Events;
