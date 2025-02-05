import React from "react";
import {
  Categories,
  Heading,
  Hero,
  Navbar,
  Template,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="px-5 xl:px-[50px] 2xl:px-[100px] pt-14 overflow-hidden">
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
