"use client";

import { FloatingNav } from "@/components/aceternity/floating-nav";




export function Navbar() {
    
    

    const navItems = [
      { id: 1, text: 'Home' },
      { id: 2, text: 'Company' },
      { id: 3, text: 'Resources' },
      { id: 4, text: 'About' },
      { id: 5, text: 'Contact' },
    ];
  // const navItems = [
  //   {
  //     name: "Home",
  //     link: "/",
      
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
      
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
     
  //   },
  // ];
  return (
    <div  className="relative  w-full">
      
      <FloatingNav navItems={navItems} />
    </div>
  );
}

