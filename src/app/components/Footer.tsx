import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Landings",
      links: ["Home", "Products", "Services"],
    },
    {
      title: "Company",
      links: ["Home", { name: "Careers", special: "Hiring!" }, "Services"],
    },
    {
      title: "Resources",
      links: ["Blog", "Products", "Services"],
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-12 items-start pt-[100px] pb-10">
      <div className="md:col-span-3">
        <Logo />
        <div className="mt-10 mb-16 font-openSans text-sm md:text-base">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </div>
        <div className="font-openSans text-sm md:text-base">
          All rights reserved.
        </div>
      </div>

      <div className="md:col-span-3" />

      <div className="flex justify-between md:col-span-6 font-openSans text-textSecondary">
        {footerLinks.map((section) => (
          <div
            key={section.title}
            className="flex flex-col justify-center gap-8"
          >
            <div className="text-sm md:text-xl font-bold">{section.title}</div>
            {section.links.map((link, index) =>
              typeof link === "string" ? (
                <div key={index} className="text-textTertiary">
                  {link}
                </div>
              ) : (
                <div key={index} className="text-textTertiary">
                  {link.name}
                  {link.special && (
                    <span className="text-[13px] font-bold rounded-3xl bg-buttonBackground py-1 px-3 text-textPrimary ml-1">
                      {link.special}
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
