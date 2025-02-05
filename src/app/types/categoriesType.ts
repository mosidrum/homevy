import { StaticImageData } from "next/image";

export type CategoriesType = {
  id?: number;
  title: string;
  description: string;
  userImage: StaticImageData;
  categoryImage: StaticImageData;
  username: string;
  date: string;
};
