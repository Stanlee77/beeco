"use client";

import Image from "next/image";
import Link from "next/link";

import planetIcon from "../../../public/icons/planet.svg";
import searchIcon from "../../../public/icons/search.svg";
import userIcon from "../../../public/icons/user.svg";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-[100%] z-[2]">
      <ul className="flex justify-evenly w-[100%] max-h-[10vh] bg-[#ffde00] p-3 box-border">
        <li>
          <Link href="/learn">
            <Image src={planetIcon} alt="learn" width={35} height={35} />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={searchIcon} alt="home" width={35} height={35} />
          </Link>
        </li>
        <li>
          <Link href="/user">
            <Image src={userIcon} alt="profile" width={35} height={35} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
