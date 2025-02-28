import React from "react";
import Reviewcard from "./Reviewcard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://www.pattuvastra.com/cdn/shop/files/IMG_8105.jpg?v=1732433045&width=720"
          alt=""
        ></img>
        <div>
          <div>
            <p className="font-bold text-xl">Shyam Textiles</p>
            <p className="text-lg text-gray-600">Women's Saree</p>
          </div>
          <div>
            <div className="price flex item-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800"> ₹ 400</span>
              <span className="line-through text-gray-200"> ₹ 999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5 w-full">
        {[1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3">
            <Reviewcard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
