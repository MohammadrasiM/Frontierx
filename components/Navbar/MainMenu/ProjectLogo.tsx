import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoPic from "../../../public/assets/logo.png";
function projectLogo() {
  return (
    <div className="w-36 mt-[6px]  flex justify-between items-center">
      <Link passHref href="/">
        <a>
          <Image src={LogoPic} alt="/" />
        </a>
      </Link>
    </div>
  );
}

export default projectLogo;
