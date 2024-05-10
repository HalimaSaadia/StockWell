"use client"

import  { useState } from "react";

const useRegistrationFormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
      setErrors(errors);
      return false
    }
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
      setErrors(errors);
      return false
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)){
      
      errors.email = "Please Enter a valid Email";
      setErrors(errors);
      return false
    }
    if (!image.trim()) {
      errors.image = "Image is required";
      setErrors(errors);
      return false
    } 
    if (!password.trim()) {
      errors.password = "Password is required";
      setErrors(errors);
      return false
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
      setErrors(errors);
      return false
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
      setErrors(errors);
      return false
    }
    setErrors({});
    // return Object.keys(errors).length === 0;
    return true
  };

  return {
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
  };
};

export default useRegistrationFormValidation;