import Image from "next/image";
import React from "react";
import { CategoriesType } from "@/app/types";

export const Card = (props: CategoriesType) => {
  return (
    <div className="max-w-[300px] h-[424px] flex flex-col">
      <Image
        src={props.categoryImage}
        alt={`category-${props.id}`}
        className="h-[209px] w-full object-cover rounded-2xl"
      />
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-3 mt-6 mb-3">
            <div className="text-textPrimary text-base font-semibold font-openSans">
              {props.title}
            </div>
            <div className="text-textTertiary text-base font-openSans">
              {props.date}
            </div>
          </div>
          <div className="text-xl text-textSecondary font-normal">
            {props.description}
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <Image
            src={props.userImage}
            alt="user"
            className="h-[32px] w-[32px] rounded-full object-cover"
          />
          <div className="text-base text-textSecondary">{props.username}</div>
        </div>
      </div>
    </div>
  );
};
