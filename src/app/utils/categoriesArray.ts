import { StaticImageData } from "next/image";

import catImage1 from "../assets/category1.png";
import catImage2 from "../assets/category2.png";
import catImage3 from "../assets/category3.png";
import catImage4 from "../assets/category4.png";
import catImage5 from "../assets/category5.png";
import catImage6 from "../assets/category6.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

type CategoryType = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
  username: string;
  userImage: StaticImageData;
};

const title = "Category";
const date = "November 22, 2021";
const id = Math.random().toString(36).substr(2, 9);
const description1 = "Pitch termsheet backing validation focus release.";
const description2 =
  "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.";
const description3 =
  "Beta prototype sales iPad gen-z marketing network effects value proposition";
const username1 = "Chandler Bing";
const username2 = "Rachel Green";
const username3 = "Monica Geller";

export const categoriesArray: CategoryType[] = [
  {
    id,
    title,
    image: catImage1,
    description: description1,
    date,
    username: username1,
    userImage: user1,
  },
  {
    id,
    title,
    image: catImage2,
    description: description2,
    date,
    username: username2,
    userImage: user2,
  },
  {
    id,
    title,
    image: catImage3,
    description: description3,
    date,
    username: username3,
    userImage: user3,
  },
  {
    id,
    title,
    image: catImage4,
    description: description1,
    date,
    username: username1,
    userImage: user1,
  },
  {
    id,
    title,
    image: catImage5,
    description: description2,
    date,
    username: username2,
    userImage: user2,
  },
  {
    id,
    title,
    image: catImage6,
    description: description3,
    date,
    username: username3,
    userImage: user3,
  },
];
