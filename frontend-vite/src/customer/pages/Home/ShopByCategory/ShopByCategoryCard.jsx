import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custome-border w-[150px] h-[150px] rounded-full lg:w-[249px] lg:h-[249px] bg-secondary-color">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23241662/2024/2/1/5a0c17bf-8f52-49e1-a29a-39e9e979be7a1706781353663-NOISE-Buds-Aero-Truly-Wireless-Earbuds-with-45hrs-Playtime-a-14.jpg"
          alt=""
        ></img>
      </div>
      <h1>Noise Buds</h1>
    </div>
  );
};

export default ShopByCategoryCard;
