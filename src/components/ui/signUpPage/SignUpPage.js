"use client"

import Lottie from "react-lottie";
import securityAnimation from "@/lotties/securityAnimation.json"
import SignUpForm from "../signUpForm/SignUpForm";

export const options = {
  loop: true,
  autoplay: true,
  animationData: securityAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SignUpPage = () => {
 
  return (
    <div>
      <SignUpForm/>
      <div className="securityAnimation">
        <Lottie options={options} />
      </div>
    </div>
  );
};

export default SignUpPage;
