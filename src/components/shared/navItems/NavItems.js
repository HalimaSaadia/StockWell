"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { MdOutlineStorefront } from "react-icons/md";

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const navLinks = [
    { href: "#", icon: <IoHomeOutline />, text: "Home" },
    { href: "#", icon: <MdOutlineStorefront />, text: "Create Store" },
    { href: "#", icon: <LuLogIn />, text: "Login" },
  ];

  return (
    <nav className="flex items-center w-full max-w-6xl  m-auto justify-between">
      <div className="">
        <Link href="#" className="text-white text-xl font-bold">
          Your Logo
        </Link>
      </div>

      <div className={`hidden lg:flex  z-40 space-x-4 `}>
        {navLinks.map(item =>    <Link
        key={item?.text}
          href={item?.href}
          className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
        >
          {item?.text}
        </Link> )}
    
     
      </div>

      <button
        id="menu-btn"
        className="lg:hidden text-neutral-50 rounded-md p-2"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -5 }}
            animate={{ opacity: 1, y: 120, x: -5 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden fixed bg-bgPrimary z-40 text-neutral-50 rounded-sm py-2 space-y-2 "
          >
            {navLinks.map(item => <Link
            key={item?.text}
              href={item?.text}
              className="text-white hover:bg-neutral-50 hover:text-textDark pl-3 pr-5 py-2  flex items-center gap-3"
            >
              {item?.icon} {item?.text}
            </Link>)}
            
         
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavItems;
