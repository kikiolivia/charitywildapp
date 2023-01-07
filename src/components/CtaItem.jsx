import React from "react";
import styles, { components } from "../style";
import ctaImage from "../assets/cta-banner.jpg";
import { BsHeart } from "react-icons/bs";

const CtaItem = () => {
  return (
    <section className="section">
      <div
        className={`${styles.maxContainer} grid md:grid-cols-[1fr_0.7fr] md:gap-[30px]`}
      >
        <div className="bg-pistachio text-center py-[50px] px-[15px] leading-[1.2] md:mb-0 mb-[20px]">
          <h2 className="text-white text-fs_4 font-fw_600 leading-[1.2] mb-[25px]">
            324+ Trusted Global Partners
          </h2>
          <button className={`${components.btnOutline} mx-auto`}>
            <span>Become a Patner</span>
            <BsHeart />
          </button>
        </div>
        <figure className="bg-light_gray">
          <img
            src={ctaImage}
            width="520"
            height="228"
            loading="lazy"
            alt="Fox"
            className={`${styles.imgCover}`}
          />
        </figure>
      </div>
    </section>
  );
};

export default CtaItem;
