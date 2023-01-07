import React from "react";
import styles from "../style";
import subtitleImg from "../assets/subtitle-img-green.png";
import avatar from "../assets/testi-avatar.png";
import testiBanner from "../assets/testi-banner.jpg";

const Testimonials = () => {
  return (
    <section className="bg-jet md:grid md:grid-cols-2">
      <div className="py-[80px] px-[15px] md:pl-[30px] md:pr-[50px]">
        <p
          className={`text-pistachio text-fs_8 font-roboto  ${styles.sectionSubtitle} mb-[10px]`}
        >
          <img src={subtitleImg} width="32" height="7" alt="Wavy Line" />
          <span>Our Testimonials</span>
        </p>
        <h2 className="lg:leading-[1.2] leading-[1.6] text-fs_3 text-white mt-[10px] mb-[40px]">
          What People Say About <strong>Our Organization</strong>
        </h2>
        <div className="text-white md:flex md:flex-start md:gap-[30px]">
          <figure>
            <img
              src={avatar}
              width="60"
              height="60"
              loading="lazy"
              alt="David S. Neuman"
              className="md:w-[180px]"
            />
          </figure>
          <div>
            <blockquote className="pr-[30px] md:my-0 my-[20px] testi-text">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium totam rem aperiam eaquesa quae
              abillo inventore veritatis quasi architecto beatae vitae dicta
              sunt explicabo enimpsam voluptatem
            </blockquote>
            <h3 className="text-fs_8 font-fw_500 mt-[15px]">David S. Neuman</h3>
            <p className="text-fs_10 text-white_50">Business Manager</p>
          </div>
        </div>
      </div>

      <figure>
        <img
          src={testiBanner}
          width="960"
          height="846"
          loading="lazy"
          alt="Rhinoceros"
        />
      </figure>
    </section>
  );
};

export default Testimonials;
