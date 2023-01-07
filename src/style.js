const styles = {
  maxContainer: "lg:max-w-[1400px] lg:px-[30px] px-[15px] lg:mx-auto lg:w-full",
  transitionOne: "transition duration-500 ease-in-out",
  transitionTwo: "transition duration-300 ease-in-out",
  sectionSubtitle: "font-fw_600 flex items-center gap-[10px]",
  imgCover: "w-full h-full object-cover",
};

export const components = {
  btnPrimary: `relative bg-pistachio text-white font-fw_600 py-[12px] px-[32px] flex items-center gap-[10px] ${styles.transitionTwo} btn`,
  btnSecondary: `relative bg-black text-white font-fw_600 py-[12px] px-[32px] flex items-center gap-[10px] ${styles.transitionTwo} hover:bg-pistachio focus:bg-pistachio btn-secondary`,
  btnOutline: `relative bg-transparent text-white font-fw_600 py-[12px] px-[32px] flex items-center gap-[10px] ${styles.transitionTwo} btn-outline`,
  btnWhite: `relative bg-platinum text-black font-fw_600 py-[12px] px-[32px] flex items-center gap-[10px]`,
};

export default styles;
