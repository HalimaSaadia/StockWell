"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import NavItems from "../shared/navItems/NavItems";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full  fixed top-0 left-0 bg-bgPrimary  inset-x-0 mx-auto border-b border-transparent dark:border-white/[0.2]   z-[5000] p-4  items-center justify-center space-x-4",
          className
        )}
      >
        <NavItems />
       
      </motion.div>
    </AnimatePresence>
  );
};
