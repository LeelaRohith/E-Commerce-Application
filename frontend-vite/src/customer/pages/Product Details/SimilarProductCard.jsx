import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative">
        <div className="card ">
          <img
            className="card-media object-top"
            src="https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/64f99a0ad51f9400133b0914/cat_img/5eQM0i5N_988SVTIR2N_2024-10-03_1.jpg"
            alt=""
          ></img>
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Nike</h1>
            <p>Red Shirt</p>
          </div>
          <div className="price flex item-center gap-3">
            <span className="font-sans text-gray-800"> ₹ 400</span>
            <span className="thin-line-through text-gray-200"> ₹ 999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
