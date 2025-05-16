import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "tools",
    },
    {
      id: 2,
      link: "explore",
    },
    {
      id: 3,
      link: "apps",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50 bg-opacity-5 backdrop-blur-sm">
        {/* Sol kısım: Logo ve Menü */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="w-32">
            <img
              src="/newlogo.png"
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Menü bağlantıları */}
          <ul className="hidden lg:flex space-x-6">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition duration-200"
              >
                <Link href={``}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ kısım: Butonlar ve simgeler */}
        <div className="flex items-center space-x-4">
          {/* Credits kutusu */}
          <div className="hidden md:flex items-center rounded-full bg-gray-500 bg-opacity-40 px-2 py-1.5">
            <div className="rounded-full bg-opacity-30 bg-gray-400 px-4 mx-1 py-1 text-sm">
              3
            </div>
            <span className="text-sm text-gray-300 mx-2">Credits Left</span>
            <div className="bg-blue-500 hover:bg-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold">
              Buy More
            </div>
          </div>

          {/* Unlock Pro */}
          <div className="hidden lg:flex items-center rounded-full bg-gray-400 bg-opacity-30 px-4 py-3 hover:bg-gray-600">
            <BsStars className="mr-2" />
            <span className="text-white font-bold text-sm">Unlock Pro</span>
          </div>

          {/* Kullanıcı simgesi */}
          <div className="hidden md:flex items-center rounded-full bg-gray-500 bg-opacity-40 p-3.5 hover:bg-gray-600">
            <IoPersonSharp />
          </div>

          {/* Mobil menü butonu */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer"
          >
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
