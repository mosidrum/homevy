import React from "react";
import { Button } from "./Button";

export const Template = () => {
  return (
    <div className="bg-textPrimary py-[72px] flex flex-col gap-12 mt-[124px] mb-[84px] justify-center items-center rounded-xl">
      <div className="font-manrope text-5xl text-white text-center px-[242px] leading-[72px]">
        An enterprise template to ramp up your company website
      </div>
      <div className="flex items-center gap-6">
        <input
          className="bg-white h-[56px] w-[370px] pl-8 py-3 border-none outline-none rounded-[56px] font-openSans"
          placeholder="Your email address"
        />
        <Button
          title="Start now"
          className="text-xl bg-buttonBackground rounded-[56px] py-4 px-14 font-bold text-textPrimary font-openSans"
        />
      </div>
    </div>
  );
};
