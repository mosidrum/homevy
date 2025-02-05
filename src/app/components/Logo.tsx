import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 hover:cursor-pointer">
      <Image src={logo} alt="logo" className="w-[24px] h-[32px]" />
      <div className="text-[43px] font-bold text-textPrimary font-manrope">
        Boldo
      </div>
    </div>
  );
};
