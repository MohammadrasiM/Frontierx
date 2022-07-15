import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import SearchBox from "./SearchBox";
interface InputProps {
  handleNav?: any;
}
function NavLinks({ handleNav }: InputProps) {
  return (
    <div className=" flex justify-between items-center">
      <SearchBox hidden={"hidden"} margin={5} />
      <div>
        <ul className="hidden md:flex ">
          <Link passHref href="/">
            <a>
              <li className="ml-10 text-sm  hover:text-red-800">Lorem</li>
            </a>
          </Link>
          <Link passHref href="/#">
            <a>
              <li className="ml-10 text-sm  hover:text-red-800">Lorem</li>
            </a>
          </Link>
          <Link passHref href="/#">
            <a>
              <li className="ml-10 text-sm  hover:text-red-800">Lorem</li>
            </a>
          </Link>
        </ul>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer ">
        <div>
          <AiOutlineMenu
            size={25}
            className="text-white hover:text-red-800 focus:text-red-800"
          />
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
