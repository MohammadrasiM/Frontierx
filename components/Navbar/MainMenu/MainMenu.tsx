import React from "react";
import ProjectLogo from "./ProjectLogo";
import NavLinks from "./NavLinks";

interface InputProps {
  handleNav?: any;
}
function MainMenu({ handleNav }: InputProps) {
  return (
    <div className="flex justify-between items-center w-full h-full bg-gradient-to-r  from-[#665AEF] to-[#FC364C]">
      <div className=" flex justify-between items-center  w-full h-full px-6 2xl:px-16  bg-[#0D0D0D] absolute mb-3">
        <ProjectLogo />

        <NavLinks handleNav={handleNav} />
      </div>
    </div>
  );
}

export default MainMenu;
