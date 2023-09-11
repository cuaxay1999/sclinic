"use client";

import BtnRegister from "@/components/btnRegister";
import { useSelector } from "react-redux";

const ButtonRegister = () => {
  const texts = useSelector((state) => state.system.texts);

  return <BtnRegister txtBtn={texts?.SIGN_UP_TRIAL} />;
};

export default ButtonRegister;
