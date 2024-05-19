"use client";

import BackgroundBeams from "@/components/aceternity/background-beams";
import { TypewriterEffectSmooth } from "@/components/aceternity/typewriter-effect";

export function Banner() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className:
        "sm:text-[22px] md:text-[40px] lg:text-[34px] xl:text-5xl dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b from-[#0DDEB8] from-20%  via-[#FF8A65] to-[#395AC7]",
    },
  ];
  return (
    <div className="h-lvh w-full  bg-neutral-950 relative flex flex-col items-center justify-center ">
      <div className=" mx-auto ">
        <TypewriterEffectSmooth words={words} />
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you are sending order confirmations, password
          reset emails, or promotional campaigns, MailJet has got you covered.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
