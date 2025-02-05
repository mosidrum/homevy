import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import svg from "../assets/tempbg.png";

export const Template = () => {
  return (
    <div className="relative bg-textPrimary py-[72px] flex flex-col gap-12 mt-[124px] mb-[84px] justify-center items-center rounded-xl">
      <Image
        src={svg}
        alt="svg"
        className="absolute right-0 top-0 z-0 rounded-r-xl"
      />

      <div className="font-manrope text-3xl lg:text-5xl text-white text-center px-5 lg:px-[242px] leading-10 lg:leading-[72px] z-10 relative">
        An enterprise template to ramp up your company website
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 z-10 relative p-4">
        <input
          className="bg-white h-[56px] w-[280px] md:w-[370px] pl-8 py-3 border-none outline-none rounded-[56px] font-openSans"
          placeholder="Your email address"
        />
        <Button
          title="Start now"
          className="text-sm md:text-xl bg-buttonBackground rounded-[56px] py-3 px-8 md:py-4 md:px-14 font-bold text-textPrimary font-openSans"
        />
      </div>
    </div>
  );
};
