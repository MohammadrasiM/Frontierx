import React from "react";
import Image from "next/image";
import mainPic from "../../public/assets/mainpic.png";
import smallface from "../../public/assets/smallface.png";
function Intruduction() {
  return (
    <>
      <div className="relative w-full flex justify-center">
        <div className=" w-[98%]">
          <img src="/assets/mainpic.png" alt="mainpic" className="w-full" />
        </div>
        <div className="absolute w-[10%] left-[45.75%] top-[64.5%]">
          <Image src={smallface} alt="small face" />
        </div>
      </div>
      <h1 className="mt-14">Lorem ipsum</h1>
      <div className="flex w-full justify-center mt-4">
        <p>Created by:</p>
        <p className="text-[#FC364C] ml-2"> Lorem ipsum</p>
      </div>
      <div className="flex w-full justify-center mt-4">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
      </div>
    </>
  );
}

export default Intruduction;
