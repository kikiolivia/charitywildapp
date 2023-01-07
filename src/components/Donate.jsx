import React from "react";
import styles, { components } from "../style";
import { BsHeart } from "react-icons/bs";
import { donateList } from "../constants";

const Donate = () => {
  return (
    <section className="section">
      <div className={`${styles.maxContainer}`}>
        <ul className="grid md:grid-cols-2 grid-cols-1 md:gap-[60px] gap-[60px]">
          {donateList.map((item) => (
            <li key={item.id}>
              <div className="ss:relative ss:pb-[150px] lg:pr-[120px] ss:shadow-none shadow-cardShadow">
                <figure className="bg-light_gray">
                  <img
                    src={item.image}
                    width="520"
                    height="325"
                    loading="lazy"
                    alt="Elephant"
                    className={`${styles.imgCover}`}
                  />
                </figure>
                <div className="bg-white p-[35px] ss:absolute lg:w-[65%] ss:w-[85%] ss:bottom-0 ss:right-0 ss:rounded-[4px] ss:shadow-cardShadow">
                  <div className="flex justify-between items-center">
                    <p className="flex gap-[5px] text-fs_8">
                      <span>Raised</span>
                      <data
                        value="256"
                        className="text-eerie_black_2 font-fw_600"
                      >
                        $256
                      </data>
                    </p>
                    <data
                      className="text-pistachio text-fs_7 font-fw_600"
                      value="83"
                    >
                      83%
                    </data>
                  </div>
                  <div className="bg-cultured rounded-[20px] mt-[10px] mb-[20px]">
                    <div className="h-[6px] w-[83%] bg-pistachio rounded-[inherit]"></div>
                  </div>
                  <h3 className="leading-[1.3] text-fs_3 text-eerie_black_1 font-fw_600">
                    Raise Hand To Save Animals
                  </h3>
                  <div className="flex flex-wrap justify-between items-center gap-[5px] my-[15px]">
                    <p class="flex gap-[5px]">
                      <span>Goal</span>
                      <data
                        className="text-pistachio font-fw_600"
                        value="34562"
                      >
                        $34562
                      </data>
                    </p>
                    <p class="flex gap-[5px]">
                      <span>Raise</span>
                      <data
                        className="text-bright_yellow_crayola font-fw_600"
                        value="562"
                      >
                        $562
                      </data>
                    </p>
                    <p class="flex gap-[5px]">
                      <span>To Go</span>
                      <data
                        className="text-medium_turquoise font-fw_600"
                        value="864"
                      >
                        $864
                      </data>
                    </p>
                  </div>

                  <button className={`${components.btnSecondary}`}>
                    <span>Donation</span>
                    <BsHeart />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Donate;
