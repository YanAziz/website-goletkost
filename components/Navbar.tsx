"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { LogoImage, NavLinks } from "@/constants/NavData";
import Image from "next/image";

const NavBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="fixed bg-white z-10 w-full flex justify-between items-center px-8 py-4 shadow-xl">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={LogoImage.image}
          alt="logo"
          width={40}
          height={40}
          className="rounded-full w-8 md:w-full"
        />
        <p className="text-lg lg:text-2xl font-bold text-gray-800">GoletKost</p>
      </div>

      <div className="flex gap-4 max-md:hidden">
        {NavLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-1 px-4 rounded-lg py-2 ${
              pathname === link.url ? "bg-blue-100" : "text-gray-800"
            }`}
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="relative flex gap-4 items-center">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute top-10 right-0 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
            {NavLinks.map((link) => (
              <Link href={link.url} key={link.label} className="flex gap-4">
                {link.icon}
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
