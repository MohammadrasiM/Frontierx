import React from "react";

import NavLinks from "./NavLinks";
import SearchBox from "../MainMenu/SearchBox";
import SideNavHead from "./SideNavHead";
interface MenuProps {
  nav: boolean;
  // 👇️ turn off type checking
  handleNav: () => any;
  setNav: any;
}
function MobileMenu({ handleNav, nav, setNav }: MenuProps) {
  return (
    <div
      className={
        nav ? "md:hidden s fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#2d0643] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen  w-[75%] sm:w-[60%] md:w-[45%] "
        }
      >
        <SideNavHead handleNav={handleNav} />

        <div className="py-4 flex flex-col">
          <NavLinks setNav={setNav} />

          <SearchBox hidden={""} margin={30} />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
