"use client";
import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import SignInWithSocial from "@/components/shared/signInWithSocial/SignInWithSocial";
import "../signUpForm/RegistrationForm.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation'

const LoginForm = () => {
const {loginWithEmailAndPassword} = useContext(AuthContext)
const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    const toastId = toast.loading("");
    console.log("submitted");
    loginWithEmailAndPassword(email, password)
      .then((res) => {
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5e503f",
          title: "successfully Logged In",
        });
        toast.remove(toastId);
        form.reset()
        router.push("/")
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#5e503f",
          title: error.message,
        });
        toast.remove(toastId);
      });
      
  };
  return (
    <div className="bg-[#000000cc] py-5 flex justify-center items-center min-h-lvh">
      <div className="  w-max  md:bg-[#26262680] p-8 rounded-se-3xl rounded-es-3xl">
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <div>
              <label
                className="block mb-1 text-xs text-[#808080] font-bold"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="w-full text-white border border-[#808080] rounded-[5px] p-[10px] bg-transparent mb-5"
                required
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="md:flex gap-x-5 space-y-5 md:space-y-0 mb-5">
            <div className="w-full">
              <label
                className="block mb-1 text-xs text-[#808080] font-bold"
                htmlFor="password"
              >
                PASSWORD
              </label>
              <input
                className="w-full text-white border border-[#808080] rounded-[5px] p-[10px] bg-transparent mb-5"
                name="password"
                type="password"
              />
            </div>
          </div>

          <div className="w-full">
            <PrimaryButton />
          </div>
        </form>

        <SignInWithSocial href="registration" />
      </div>
    </div>
  );
};

export default LoginForm;
