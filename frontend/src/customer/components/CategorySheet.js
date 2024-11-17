import React from "react";
import { menLevelTwo } from "../../data/category/level two/menLevelTwoCategory";
import { womenLevelTwo } from "../../data/category/level two/womenLevelTwo";
import { menLevelThree } from "../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../data/category/level three/womenLevelThree";
import { Box } from "@mui/material";
const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
};
const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
};
const CategorySheet = ({ selectedCategory, setShowSheet }) => {
  const childCategory = (category, parentCategoryId) => {
    return category.filter(
      (child) => child.parentCategoryId == parentCategoryId
    );
  };
  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            key={index}
            className={`p-8 lg:w-[20%] ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            } `}
          >
            <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item, index) => (
                <div key={index}>
                  <li className="hover:text-primary-color cursor-pointer">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
