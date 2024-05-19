"use client";

import { FloatingNav } from "@/components/aceternity/floating-nav";
import React from "react";



export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      
    },
    {
      name: "About",
      link: "/about",
      
    },
    {
      name: "Contact",
      link: "/contact",
     
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

