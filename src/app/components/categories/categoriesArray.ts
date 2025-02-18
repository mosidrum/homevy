import catImage1 from "../../assets/category1.png";
import catImage2 from "../../assets/category2.jpeg";
import catImage3 from "../../assets/category3.png";
import catImage4 from "../../assets/category4.jpeg";
import catImage5 from "../../assets/category5.jpeg";
import catImage6 from "../../assets/category6.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import { CategoriesType } from "@/app/types";

const desc1 = "Pitch termsheet backing validation focus release.";
const desc2 =
  "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.";
const desc3 =
  "Beta prototype sales iPad gen-z marketing network effects value proposition";
const username1 = "Chandler Bing";
const username2 = "Rachel Green";
const username3 = "Monica Geller";
const date = "November 22, 2021";
const title = "Category";

export const categoriesArray: CategoriesType[] = [
  {
    id: 1,
    title,
    description: desc1,
    userImage: user1,
    categoryImage: catImage1,
    username: username1,
    date,
  },
  {
    id: 2,
    title,
    description: desc2,
    userImage: user2,
    categoryImage: catImage2,
    username: username2,
    date,
  },
  {
    id: 3,
    title,
    description: desc3,
    userImage: user3,
    categoryImage: catImage3,
    username: username3,
    date,
  },
  {
    id: 4,
    title,
    description: desc1,
    userImage: user1,
    categoryImage: catImage4,
    username: username1,
    date,
  },
  {
    id: 5,
    title,
    description: desc2,
    userImage: user2,
    categoryImage: catImage5,
    username: username2,
    date,
  },
  {
    id: 6,
    title,
    description: desc3,
    userImage: user3,
    categoryImage: catImage6,
    username: username3,
    date,
  },
];
