import Image from "next/image";
import React from "react";
import darklogo from "../../public/assets/darklogo.png";
function Footer() {
  return (
    <div className="mt-96  w-full h-28 bg-black flex justify-center content-center items-center">
      <Image src={darklogo} alt="logo" />
    </div>
  );
}

export default Footer;
