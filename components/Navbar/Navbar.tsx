import React, { useState, useEffect } from "react";
import MainMenu from "./MainMenu/MainMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[]"
          : "fixed w-full h-20  z-[100] bg-[#0D0D0D]"
      }
    >
      <MainMenu handleNav={handleNav} />
      <MobileMenu handleNav={handleNav} nav={nav} setNav={setNav} />
    </div>
  );
};

export default Navbar;
