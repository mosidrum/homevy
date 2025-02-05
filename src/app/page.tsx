import React from "react";
import { Categories, Heading, Hero, Navbar, Template } from "./components";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="px-[100px] pt-14">
      <Navbar />
      <Heading />
      <Hero />
      <hr className="w-full h-[2px] bg-textPrimary mt-[72px] mb-[96px]" />
      <Categories />
      <Template />
      <Footer />
    </div>
  );
}
