import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import styles, { components } from "../style";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { IoChevronForward, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${
        scroll
          ? "bg-eerie_black_1 shadow-[0_0_10px_hsl(0deg_1%_41%/80%)]"
          : "bg-transparent"
      } fixed top-0 left-0 w-full md:py-[25px] py-[18px] z-10 header ${
        styles.transitionTwo
      }`}
    >
      <div
        className={`${styles.maxContainer} flex justify-between items-center gap-[50px]`}
      >
        <div className="flex items-center gap-20">
          <h1>
            <a
              href="/"
              className="text-white font-ff_oswald text-[3.2rem] uppercase"
            >
              Wildvine
            </a>
          </h1>

          <select
            name="language"
            className="lg:block hidden relative bg-transparent border-none text-white text-fs_8 font-fw_600"
          >
            <option value="english" className="text-eerie_black_1">
              English
            </option>
            <option value="french" className="text-eerie_black_1">
              French
            </option>
            <option value="spanish" className="text-eerie_black_1">
              Spanish
            </option>
          </select>
        </div>

        <button
          className="lg:hidden flex text-white text-[3.8rem]"
          onClick={handleClick}
        >
          <BiMenu />
        </button>

        <nav
          className={`
            ${
              !nav
                ? "invisible duration-300 ease-cubic_in"
                : "visible translate-y-[-100%] duration-500 ease-cubic_out"
            } fixed bg-eerie_black_1 top-[100%] left-0 w-full h-full outline-1 outline-white_10 flex flex-col z-10`}
        >
          <button
            className="absolute top-[15px] right-[15px]"
            onClick={handleClick}
          >
            <IoClose className="font-fw_700 text-white text-[2.4rem]" />
          </button>
          <a
            href="/"
            className="text-[4rem] w-max mx-auto mt-[50px] text-white font-ff_oswald uppercase font-fw_600"
          >
            Wildvine
          </a>
          <ul
            className={`${
              !nav ? "opacity-0 delay-[0ms]" : "opacity-100 delay-200"
            } max-w-[400px] w-full m-auto px-[10px] ${styles.transitionOne}`}
          >
            {navLinks.map((item) => (
              <li
                className={`text-white text-fs_9 font-fw_500 uppercase flex justify-between items-center pl-[10px] pr-[15px] py-[8px] ${styles.transitionOne} hover:bg-pistachio`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
                <IoChevronForward />
              </li>
            ))}
          </ul>
        </nav>

        <ul className="lg:flex hidden gap-[10px] navbar-list">
          {navLinks.map((item) => (
            <li>
              <a
                href={`#${item.id}`}
                className={`text-white text-fs_8 font-fw_600 capitalize pr-[10px] pl-[15px] py-[8px] ${styles.transitionTwo} navbar-link `}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:flex hidden items-center gap-[50px]">
          <button className="text-white text-[2.6rem]">
            <BiSearch className="font-fs_500" />
          </button>
          <button className={`${components.btnPrimary}`}>
            <span>Donation</span>
            <BsHeart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
