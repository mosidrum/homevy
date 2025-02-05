import React from "react";
import { Card } from "./Card";
import { Button } from "../Button";
import { categoriesArray } from "./categoriesArray";

export const Categories = () => {
  return (
    <div className="mx-0 sm:mx-20 xl:mx-20 2xl:mx-52">
      <div className="text-xl md:text-2xl xl:text-5xl text-textSecondary font-light mb-10">
        Latest news
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-x-[50px] gap-y-20">
        {categoriesArray.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            categoryImage={item.categoryImage}
            date={item.date}
            userImage={item.userImage}
            username={item.username}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          title="Load more"
          className="px-7 py-2 md:px-14 md:py-4 border border-textPrimary font-bold text-sm md:text-xl rounded-[56px] mt-24"
        />
      </div>
    </div>
  );
};
