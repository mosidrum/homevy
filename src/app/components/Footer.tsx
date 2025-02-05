import React from "react";
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <div className="min-h-14 grid gap-5 md:grid-cols-12 items-start py-[100px]">
      <div className="md:col-span-3 ">
        <Logo />
        <div className="mt-10 mb-16 font-openSans">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </div>
        <div className="font-openSans">All rights reserved.</div>
      </div>

      <div className="md:col-span-3" />

      <div className="flex justify-between md:col-span-6 font-openSans text-textSecondary">
        <div className="flex flex-col justify-center gap-8">
          <div className="text-xl font-bold">Landings</div>
          <div className="text-textTertiary">Home</div>
          <div className="text-textTertiary">Products</div>
          <div className="text-textTertiary">Services</div>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <div className="text-xl font-bold">Company</div>
          <div className="text-textTertiary">Home</div>
          <div className="text-textTertiary">
            Careers{" "}
            <span className="text-[13px] font-bold rounded-3xl bg-buttonBackground py-1 px-3 text-textPrimary ml-1">
              Hiring!
            </span>
          </div>
          <div className="text-textTertiary">Services</div>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <div className="text-xl font-bold">Resources</div>
          <div className="text-textTertiary">Blog</div>
          <div className="text-textTertiary">Products</div>
          <div className="text-textTertiary">Services</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
