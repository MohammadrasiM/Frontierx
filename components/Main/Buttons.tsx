import React from "react";

import { RiPriceTagLine, RiApps2Line, RiNumbersLine } from "react-icons/ri";
function Buttons() {
  let buttons = [
    { icon: RiNumbersLine, id: 11 },
    { icon: RiPriceTagLine, id: 22 },
    { icon: RiApps2Line, id: 33 },
  ];
  return (
    <div className="flex items-center justify-center mt-16 py-4 ">
      <div className=" items-center justify-center  gap-4 grid lg:grid-cols-12 w-1/2 ">
        {buttons.map((icons) => (
          <div
            key={`icon${icons.id}`}
            className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 flex justify-center items-center"
          >
            <button className="w-48 h-14 bg-[rgba(13,13,13,0.5)] flex items-center justify-center gap-2 hover:bg-[#0D0D0D] capitalize">
              <icons.icon /> Lorem ipsum
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
