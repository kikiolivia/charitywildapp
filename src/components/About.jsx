import React from "react";
import styles, { components } from "../style";
import decoImg from "../assets/deco-img.png";
import aboutImage01 from "../assets/about-banner-1.jpg";
import aboutImage02 from "../assets/about-banner-2.jpg";
import aboutImage03 from "../assets/about-banner-3.jpg";
import aboutImage04 from "../assets/about-banner-4.jpg";
import subtitleImg from "../assets/subtitle-img-green.png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { aboutList } from "../constants";

const About = () => {
  return (
    <section className="pt-[120px] section ">
      <div
        className={`${styles.maxContainer} md:grid md:grid-cols-[1fr_0.8fr] items-start gap-[120px]`}
      >
        <div className="relative max-w-max mb-[30px]">
          <h2 className="text-fs_1 font-fw_700 whitespace-nowrap ss:leading-[0.8] leading-none text-transparent origin-top-left rotate-[0.25turn] absolute sm:top-[10%] top-[55%] sm:left-[calc(100%+50px)] left-[100%] z-[-1] deco-title">
            About Us
          </h2>
          <img
            src={decoImg}
            width="58"
            height="261"
            alt=""
            className="absolute top-[-40px] lg:left-[-35px] left-0 z-[-1]"
          />
          <div className="sm:flex gap-[20px]">
            <div className="md:w-[50%]">
              <img
                src={aboutImage01}
                width="315"
                height="380"
                loading="lazy"
                alt="Tiger"
                className="w-full mb-[30px] md:max-w-full max-w-max"
              />
              <img
                src={aboutImage02}
                width="386"
                height="250"
                loading="lazy"
                alt="Panda"
                className="w-full mb-[30px] md:max-w-full max-w-max md:min-w-[120%] md:ml-[-20%]"
              />
            </div>
            <div className="md:w-[50%]">
              <img
                src={aboutImage03}
                width="250"
                height="277"
                loading="lazy"
                alt="Elephant"
                className="w-full mb-[30px] md:max-w-[90%] max-w-max"
              />
              <img
                src={aboutImage04}
                width="315"
                height="380"
                loading="lazy"
                alt="Deer"
                className="w-full mb-[30px] md:max-w-full max-w-max"
              />
            </div>
          </div>
        </div>

        <div>
          <p
            className={`text-pistachio text-fs_8 font-roboto  ${styles.sectionSubtitle} mb-[10px]`}
          >
            <img src={subtitleImg} width="32" height="7" alt="Wavy Line" />
            <span>Why Choose Us</span>
          </p>
          <h2 className="lg:leading-[1.2] leading-[1.6] text-fs_3 text-eerie_black_1">
            Rise Your Hand to Save <strong>World Animals Life</strong>
          </h2>
          <ul className="flex flex-wrap gap-[15px] mt-[25px] mb-[35px]">
            <li>
              <button className="bg-pistachio text-white text-fs_8 font-fw_800 py-[10px] px-[32px]">
                Our Mission
              </button>
            </li>
            <li>
              <button className="bg-platinum text-granite_gray text-fs_8 font-fw_800 py-[10px] px-[32px]">
                Our Vision
              </button>
            </li>
            <li>
              <button className="bg-platinum text-granite_gray text-fs_8 font-fw_800 py-[10px] px-[32px]">
                Next Plan
              </button>
            </li>
          </ul>

          <div>
            <p className="leading-[2]">
              But I must explain to you how all this mistaken denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system expoundmaster
            </p>
            <ul className="mt-[25px] mb-[50px]">
              {aboutList.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-[10px] py-[5px]"
                >
                  <div className="text-[3rem] text-pistachio">
                    <IoCheckmarkCircleSharp />
                  </div>
                  <p className="text-eerie_black_2 text-fs_8 font-fw_500">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
            <button className={`${components.btnSecondary}`}>
              <span>Donation</span>
              <BsHeart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
