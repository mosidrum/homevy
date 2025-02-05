import React from "react";

export const Heading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-[27px] mb-10 mt-[45px]">
      <div className="text-[14px] md:text-[20px] leading-[32px]">Blog</div>
      <div className="text-textPrimary text-[20px] leading-[50px] md:text-[64px] md:leading-[84px]">
        Thoughts and words
      </div>
    </div>
  );
};
