import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  return (
    <div className=" gap-7 flex flex-wrap justify-between px-3 lg:px-20">
      {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <ShopByCategoryCard />
      ))}
    </div>
  );
};

export default ShopByCategory;
