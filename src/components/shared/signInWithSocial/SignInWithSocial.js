import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInWithSocial = () => {
    return (
      <div className="md:flex justify-between gap-5">
      <div className="border-gradient p-[1px] flex-1">
        <div className="flex gap-2 items-center  bg-[#050505] px-3 py-5 rounded-xl cursor-pointer">
          <FcGoogle className="text-2xl" />{" "}
          <span className="text-white text-sm">CONTINUE WITH GOOGLE</span>
        </div>
      </div>
      <div className="border-gradient p-[1px] flex-1">
        <div className="flex gap-2 items-center  bg-[#050505] px-3 py-5 rounded-xl cursor-pointer">
          <FaGithub className="text-2xl bg-white rounded-full" />{" "}
          <span className="text-white text-sm">CONTINUE WITH GITHUB</span>
        </div>
      </div>
    </div>
    );
};

export default SignInWithSocial;