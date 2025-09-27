import React from "react";

const DealCard = () => {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] w-full h-[12rem] object-cover object-top border-secondary-color"
        src="https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
        alt=""
      ></img>
      <div className="border-secondary-color-4 text-white p-2 bg-[#033860] text-center">
        <p className="text-lg font-semibold">Smart Watch</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">Shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
