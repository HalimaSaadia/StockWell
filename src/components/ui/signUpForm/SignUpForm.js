import useRegistrationFormValidation from "@/Hooks/useRegistrationFormValidation";
import "./RegistrationForm.css";
import Link from "next/link";
import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import SignInWithSocial from "@/components/shared/signInWithSocial/SignInWithSocial";

const SignUpForm = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    image,
    setImage,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    validateForm,
  } = useRegistrationFormValidation();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    const name = `${firstName} ${lastName}`;
    console.log(isValid);
    if (isValid) {
      const toastId = toast.loading("creating....");
      try {
        const result = await axios.post(
          `https://api.imgbb.com/1/upload?key=bb2268c0e82d269ae0139798d1d2580f`,
          { image: e.target.image.files[0] },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const profileImage = result?.data?.data?.display_url;
        // const user = {userName:data?.name,
        //   userEmail:data?.email,
        //   userImage:profileImage,
        //   role:"user",
        //   isPremiumTaken: false
        // }

        createUser(email, password)
          .then((res) => {
            // axiosPublic.post("/create-user" ,user)
            // .then(res=> console.log(res.data))
            updateUserProfile(name, profileImage).then(() => {});
            Swal.fire({
              icon: "success",
    
              title: "Successfully Sign up",
            });
            toast.remove(toastId);
            // navigate("/")
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: err.message,
    
            });
            toast.remove(toastId);
          });
        toast.remove(toastId);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",

          title: error.message,
        });
        toast.remove(toastId);
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setImage("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <div className="bg-[#000000cc] py-5 flex justify-center items-center min-h-lvh">
        <div className="  w-max  md:bg-[#26262680] p-8 rounded-se-3xl rounded-es-3xl">
          <form onSubmit={handleSubmit}>
            <div className=" md:flex space-y-5 md:space-y-0 gap-x-5 mb-5">
              <div>
                <label
                  className="block mb-1 text-xs text-[#808080] font-bold"
                  htmlFor="firstName"
                >
                  FIRST NAME
                </label>
                <input
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
                <p className="errorMessage">{errors?.firstName}</p>
              </div>
              <div>
                <label
                  className="block mb-1 text-xs text-[#808080] font-bold"
                  htmlFor="lastName"
                >
                  LAST NAME
                </label>
                <input
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
                <p className="errorMessage">{errors?.lastName}</p>
              </div>
            </div>
            <div className="md:flex gap-x-5 space-y-5 md:space-y-0 mb-5">
              <div>
                <label
                  className="block mb-1 text-xs text-[#808080] font-bold"
                  htmlFor="email"
                >
                  EMAIL
                </label>
                <input
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
                <p className="errorMessage">{errors?.email}</p>
              </div>
              <div>
                <label
                  className="block mb-1 text-xs text-[#808080] font-bold"
                  htmlFor="Image"
                >
                  CHOOSE IMAGE
                </label>
                <input
                  className="input"
                  value={image}
                  name="image"
                  onChange={(e) => {
                    setImage(e.target.value);
                    console.log(e.target.files[0]);
                  }}
                  type="file"
                  accept="image/png"
                />
                <p className="errorMessage">{errors?.image}</p>
              </div>
            </div>
            <div className="md:flex space-y-5 md:space-y-0 gap-x-5 mb-5">
              <div>
                <label
                  className="block mb-1 text-xs text-[#808080] font-bold"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <input
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                <p className="errorMessage">{errors?.password}</p>
              </div>
              <div>
                <label
                  className="block mb-1 text-xs text-[#808080] font-bold"
                  htmlFor="confirmPassword"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                />
                <p className="errorMessage">{errors?.confirmPassword}</p>
              </div>
            </div>
            <div className="w-full">
              <PrimaryButton />
            </div>
          </form>
        
          <SignInWithSocial href="login" />
          
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
