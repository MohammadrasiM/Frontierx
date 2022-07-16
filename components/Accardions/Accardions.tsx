import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Accordions() {
  return (
    <div id="accardions" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-20 w-full">
        <div className="grid lg:grid-cols-12 ">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default Accordions;
