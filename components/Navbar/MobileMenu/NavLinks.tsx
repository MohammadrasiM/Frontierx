import React from "react";
import Link from "next/link";
interface MenuProps {
  setNav: any;
}
function NavLinks({ setNav }: MenuProps) {
  return (
    <ul className="mb-16">
      <Link passHref href="/">
        <a>
          <li
            onClick={() => setNav(false)}
            className="py-4 text-sm hover:text-red-700"
          >
            Lorem
          </li>
        </a>
      </Link>
      <Link passHref href="/">
        <a>
          <li
            onClick={() => setNav(false)}
            className="py-4 text-sm  hover:text-red-700"
          >
            Lorem
          </li>
        </a>
      </Link>
      <Link passHref href="/">
        <a>
          <li
            onClick={() => setNav(false)}
            className="py-4 text-sm  hover:text-red-700"
          >
            Lorem
          </li>
        </a>
      </Link>
    </ul>
  );
}

export default NavLinks;
