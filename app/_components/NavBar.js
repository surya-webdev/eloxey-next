"use client";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";
import { CiHeart, CiUser } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function handler() {
    setIsOpen((s) => !s);
  }

  return (
    <nav className="relative flex items-center justify-between p-4 sm:px-4">
      <h1 className="text-[1.4rem] font-bold md:text-2xl">
        <span>ELOXEY</span> <span className="font-normal">brand</span>
      </h1>
      <ul className="hidden gap-6 text-[1.2rem] md:flex">
        <li>
          <Link href="#">Catalogue</Link>
        </li>
        <li>
          <Link href="#">My Orders</Link>
        </li>{" "}
        <li>
          <Link href="#">About us</Link>
        </li>{" "}
        <li>
          <Link href="#">Contact us</Link>
        </li>
      </ul>
      <ul className="md:3xl flex items-center justify-center gap-1 text-2xl">
        <li>
          <Link href="#">
            <TbShoppingBag />
          </Link>
        </li>
        <li>
          <Link href="#">
            <CiHeart />
          </Link>
        </li>
        <li>
          <Link href="#">
            <CiUser />
          </Link>
        </li>
        <li className="z-10 text-[1.8rem] md:hidden" onClick={() => handler()}>
          <a href="#">{isOpen ? <IoCloseOutline /> : <MdOutlineMenuOpen />}</a>
        </li>
      </ul>
      {isOpen && (
        <ul className="absolute top-[10%] z-0 flex h-screen w-screen flex-col items-center justify-center gap-2 bg-white text-[1.4rem]">
          <li>
            <Link href="#">Catalogue</Link>
          </li>
          <li>
            <Link href="#">My Orders</Link>
          </li>{" "}
          <li>
            <Link href="#">About us</Link>
          </li>{" "}
          <li>
            <Link href="#">Contact us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
