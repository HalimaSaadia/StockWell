"use client";
import securityAnimation from "@/lotties/securityAnimation.json";
import Lottie from "react-lottie";
import LoginForm from "../loginForm/LoginForm";

export const options = {
  loop: true,
  autoplay: true,
  animationData: securityAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <div className="securityAnimation">
        <Lottie options={options} />
      </div>
    </div>
  );
};

export default LoginPage;
