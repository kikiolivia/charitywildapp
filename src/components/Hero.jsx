import React from "react";
import styles, { components } from "../style";
import subtitleImg from "../assets/subtitle-img-white.png";
import { BsHeart } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      className="bg-eerie_black_1 text-white md:min-h-[700px] min-h-[700px] lg:pt-[200px] pt-[120px] lg:pb-[325px] pb-[60px] grid items-center hero"
      id="home"
    >
      <div className={`${styles.maxContainer}`}>
        <p
          className={`text-white font-ff_inter text-fs_7 ${styles.sectionSubtitle}`}
        >
          <img src={subtitleImg} width="32" height="7" alt="Wavy Line" />
          <span>Welcome to Wildvine</span>
        </p>
        <h2 className="font-fw_300 text-fs_2 my-[20px] leading-[1.2]">
          Give Love for saving{" "}
          <strong className="font-fw_700">World Animals</strong>
        </h2>
        <p className="font-ff_inter text-fs_8 tracking-[-1px] max-w-[50ch] my-[30px]">
          Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua suspendisse ultrices gravida.
        </p>
        <button className={`${components.btnPrimary}`}>
          <span>Donation</span>
          <BsHeart />
        </button>
      </div>
    </section>
  );
};

export default Hero;
