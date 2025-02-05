import React from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

const menus = [
  "Product",
  "Service",
  "About",
  <Button
    key="login"
    title="Login"
    className="px-10 py-2 border border-textPrimary rounded-3xl"
  />,
];

export const Navbar = () => {
  return (
    <div className="relative grid md:grid-cols-2">
      <Logo />
      <div className="md:flex md:items-center md:justify-end md:gap-10 hidden">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="text-textSecondary text-base font-openSans hover:cursor-pointer hover:opacity-50"
          >
            {menu}
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden hover:cursor-pointer font-bold">
        <RxHamburgerMenu color="#0A2640" size={30} />
      </div>
    </div>
  );
};
