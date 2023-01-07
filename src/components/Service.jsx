import React from "react";
import styles from "../style";
import subtitleImg from "../assets/subtitle-img-green.png";
import { BsArrowRightShort } from "react-icons/bs";
import { serviceList } from "../constants";

const Service = () => {
  return (
    <section className="section bg-baby_powder bg-no-repeat bg-[center_top]">
      <div className={`${styles.maxContainer}`}>
        <p
          className={`text-pistachio text-fs_8 font-roboto  ${styles.sectionSubtitle} mb-[10px]`}
        >
          <img src={subtitleImg} width="32" height="7" alt="Wavy Line" />
          <span>What We Do</span>
        </p>
        <h2 className="lg:leading-[1.2] leading-[1.6] text-fs_3 text-eerie_black_1 mt-[10px] mb-[40px]">
          We Work Differently to <strong>keep The World Safe</strong>
        </h2>
        <ul className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]">
          {serviceList.map((menuItem) => {
            const { id, title, Icon } = menuItem;
            return (
              <li key={id}>
                <div
                  className={`bg-white text-center py-[45px] px-[40px] rounded-[2px] shadow-cardShadow ${styles.transitionOne} service-card `}
                >
                  <div className="text-pistachio text-[7rem] max-w-max mx-auto">
                    <Icon />
                  </div>
                  <h3 className="text-fs_3 text-eerie_black_1 my-[10px] tracking-[-1px] leading-[1.6] font-fw_500">
                    {title}
                  </h3>
                  <p className="font-ff_inter">
                    Tempor incididunt ut labores dolore magna suspene
                  </p>
                  <a
                    href="/"
                    className="flex justify-center items-center gap-[5px] text-silver_chalice text-fs_8 font-fw_600 my-[15px]"
                  >
                    <span className="underline">Read More</span>
                    <BsArrowRightShort
                      className="text-fs_6"
                      stroke-width="0.5"
                    />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Service;
