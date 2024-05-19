import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/shared/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    
    </>
  );
}
