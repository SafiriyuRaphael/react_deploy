import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title}) => {
  const {width}= useWindowSize()
  return (
    <header className="bg-blue-400 flex items-center  justify-between px-2 md:text-2xl pl-5 w-full pb-1 dark:bg-slate-400 dark:text-[#E0E0E0] ">
      <h1>{title}</h1>
      {width < 768 ? 
        <FaMobileAlt className="h-11 w-6" aria-label="Mobile view"/>
        : width < 992 ? 
        <FaTabletAlt className="h-14 w-10" aria-label="Tablet view"/>
        : 
        <FaLaptop className="h-20 w-14" aria-label="Laptop view"/>
      }
    </header>
  );
};

export default Header;
