import { AuthContext } from "@/Provider/AuthProvider";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SignInWithSocial = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    const toastId = toast.loading("");
    loginWithGoogle()
      .then((res) => {
        // const user = {
        //   userName: res?.user?.displayName,
        //   userEmail: res?.user?.email,
        //   userImage: res?.user?.photoURL,
        //   role: "user",
        //   isPremiumTaken: false,
        // };
        // axiosPublic
        //   .post("/create-user", user)
        //   .then((res) => console.log(res.data));
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5e503f",
          title: "successfully Logged In",
        });
        toast.remove(toastId);
        // navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#5e503f",
          title: error.message,
        });
        toast.remove(toastId);
      });
  };
  const handleGithub = () => {
    const toastId = toast.loading("");
    loginWithGithub()
      .then((res) => {
        // const user = {
        //   userName: res?.user?.displayName,
        //   userEmail: res?.user?.email,
        //   userImage: res?.user?.photoURL,
        //   role: "user",
        //   isPremiumTaken: false,
        // };
        // axiosPublic
        //   .post("/create-user", user)
        //   .then((res) => console.log(res.data));
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5e503f",
          title: "successfully Logged In",
        });
        toast.remove(toastId);
        // navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#5e503f",
          title: error.message,
        });
        toast.remove(toastId);
      });
  };
  return (
    <div className="md:flex justify-between gap-5 space-y-5 md:space-y-0">
      <div
        onClick={handleGoogleLogin}
        className="border-gradient p-[1px] flex-1"
      >
        <div className="flex gap-2 items-center  bg-[#050505] px-3 py-5 rounded-xl cursor-pointer">
          <FcGoogle className="text-2xl" />{" "}
          <span className="text-white text-sm">CONTINUE WITH GOOGLE</span>
        </div>
      </div>
      <div onClick={handleGithub} className="border-gradient p-[1px] flex-1">
        <div className="flex gap-2 items-center  bg-[#050505] px-3 py-5 rounded-xl cursor-pointer">
          <FaGithub className="text-2xl bg-white rounded-full" />{" "}
          <span className="text-white text-sm">CONTINUE WITH GITHUB</span>
        </div>
      </div>
    </div>
  );
};

export default SignInWithSocial;
