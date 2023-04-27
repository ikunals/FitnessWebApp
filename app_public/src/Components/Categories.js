import React from "react";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.webp";
import Card from "./Card";
import "../css/Categories.css";

const Categories = () => {
  const categories = [
    {
      title: "Workouts For Men",
      img: img4,
      url: "https://www.youtube.com/watch?v=xRRS5eJLET4",
    },
    {
      title: "Workouts For Women",
      img: img2,
      url: "https://www.youtube.com/watch?v=digpucxFbMo",
    },
    {
      title: "Muscle Building",
      img: img3,
      url: "https://www.youtube.com/watch?v=nsOWE9UlQvM",
    },
    {
      title: "Fat Loss",
      img: img1,
      url: "https://www.youtube.com/watch?v=l0i9uaHCGIc",
    },
    {
      title: "Increase Strength",
      img: img5,
      url: "https://www.youtube.com/watch?v=4CUS72Grjh8",
    },
    {
      title: "Ab Workouts",
      img: img6,
      url: "https://www.youtube.com/watch?v=9p7-YC91Q74",
    },
    {
      title: "Full Body",
      img: img7,
      url: "https://www.youtube.com/watch?v=dzsTgmGxlO8",
    },
    {
      title: "Workouts For Men",
      img: img4,
      url: "https://www.youtube.com/watch?v=xRRS5eJLET4",
    },
    {
      title: "Workouts For Women",
      img: img2,
      url: "https://www.youtube.com/watch?v=digpucxFbMo",
    },
    {
      title: "Muscle Building",
      img: img3,
      url: "https://www.youtube.com/watch?v=nsOWE9UlQvM",
    },
    {
      title: "Fat Loss",
      img: img1,
      url: "https://www.youtube.com/watch?v=l0i9uaHCGIc",
    },
    {
      title: "Increase Strength",
      img: img5,
      url: "https://www.youtube.com/watch?v=4CUS72Grjh8",
    },
    {
      title: "Ab Workouts",
      img: img6,
      url: "https://www.youtube.com/watch?v=9p7-YC91Q74",
    },
    {
      title: "Full Body",
      img: img7,
      url: "https://www.youtube.com/watch?v=dzsTgmGxlO8",
    },
    {
      title: "Increase Strength",
      img: img5,
      url: "https://www.youtube.com/watch?v=4CUS72Grjh8",
    },
    {
      title: "Ab Workouts",
      img: img6,
      url: "https://www.youtube.com/watch?v=9p7-YC91Q74",
    },
    {
      title: "Full Body",
      img: img7,
      url: "https://www.youtube.com/watch?v=dzsTgmGxlO8",
    },
    {
      title: "Workouts For Men",
      img: img4,
      url: "https://www.youtube.com/watch?v=xRRS5eJLET4",
    },
    {
      title: "Workouts For Women",
      img: img2,
      url: "https://www.youtube.com/watch?v=digpucxFbMo",
    },
    {
      title: "Muscle Building",
      img: img3,
      url: "https://www.youtube.com/watch?v=nsOWE9UlQvM",
    },
    {
      title: "Fat Loss",
      img: img1,
      url: "https://www.youtube.com/watch?v=l0i9uaHCGIc",
    },
    {
      title: "Increase Strength",
      img: img5,
      url: "https://www.youtube.com/watch?v=4CUS72Grjh8",
    },
    {
      title: "Ab Workouts",
      img: img6,
      url: "https://www.youtube.com/watch?v=9p7-YC91Q74",
    },
    {
      title: "Full Body",
      img: img7,
      url: "https://www.youtube.com/watch?v=dzsTgmGxlO8",
    },
  ];
  return (
    <div className="text-center pt-12 px-8 xl:px-12  mx-auto" id="categories">
      <div className="max-w-[45rem] md:max-w-[65rem] mx-auto">
        {/* Title */}
        <p className="font-black text-[30px] sm:text-[35px] text-[#005599]">
          WORKOUT CATEGORIES
        </p>
        {/* Description */}
        <p className="text-[20px] pt-3">
          Choose a category that best suits the workout you're searching for.
          Once in the category, findout the right workout for your experience
          and goals.
        </p>
      </div>

      {/* Categories */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4   lg:grid-cols-5 2xl:grid-cols-6   gap-x-4  gap-y-5 pt-6"
        id="gridd"
      >
        {categories.map((category) => (
          <Card
            title={category.title}
            img={category.img}
            className="card"
            url={category.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
