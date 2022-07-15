import React from "react";
import Buttons from "./Buttons";
import Intruduction from "./Intruduction";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="w-full h-full  p-2 flex justify-center items-center">
        <div className="mt-20 w-full">
          <Intruduction />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Main;
