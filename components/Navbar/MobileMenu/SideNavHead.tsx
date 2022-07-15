import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoPic from "../../../public/assets/logo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
interface MenuProps {
  handleNav: () => any;
}
function SideNavHead({ handleNav }: MenuProps) {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <Link passHref href="/">
          <a onClick={handleNav}>
            <Image src={LogoPic} alt="/" />
          </a>
        </Link>
        <div>
          <AiOutlineCloseCircle
            size={"1.75rem"}
            onClick={handleNav}
            className="rounded-full   cursor-pointer"
          />
        </div>
      </div>
      <div className="border-b bprder-gray-300 my-4"></div>
    </div>
  );
}

export default SideNavHead;
