import Image from "next/image";
import React from "react";
import hero from "../assets/hero.png";
import user1 from "../assets/user1.png";

export const Hero = () => {
  return (
    <div className="min-h-14 grid md:grid-cols-2 gap-x-[100px] justify-between">
      <div className="w-full">
        <Image src={hero} alt="hero" className="w-full h-[386px] object-fill" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 mt-6 mb-3">
          <div className="text-textPrimary text-base font-semibold font-openSans ">
            Category
          </div>
          <div className="text-textTertiary text-base font-openSans">November 22, 2021</div>
        </div>
        <div className="text-[48px] leading-[72px]">
          Pitch termsheet backing validation focus release.
        </div>

        <div className="flex items-center gap-3 mt-5">
          <Image
            src={user1}
            alt="user"
            className="h-[32px] w-[32px] rounded-full object-cover"
          />
          <div className="text-base text-textSecondary">Chandler Bing</div>
        </div>
      </div>
    </div>
  );
};
