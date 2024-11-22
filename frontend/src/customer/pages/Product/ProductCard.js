import React from "react";
import { useState, useEffect } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
const images = [
  "https://5.imimg.com/data5/SELLER/Default/2021/9/EW/WK/UC/20506059/e-commerce-men-t-shirt-photography-500x500.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2021/9/JY/UZ/QP/20506059/e-commerce-men-t-shirt-photography-250x250.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2021/9/EW/WK/UC/20506059/e-commerce-men-t-shirt-photography-500x500.jpg",
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              key={index}
              src={item}
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
              alt=""
            ></img>
          ))}
          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="white">
                  <Favorite sx={{ color: "#087CA7" }} />
                </Button>
                <Button variant="contained" color="white">
                  <ModeComment sx={{ color: "#087CA7" }} />
                </Button>
              </div>
            </div>
          )}
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
    </>
  );
};

export default ProductCard;
