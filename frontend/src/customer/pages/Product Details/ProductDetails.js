import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import Reviewcard from "../Review/Reviewcard";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://www.pattuvastra.com/cdn/shop/files/IMG_8105.jpg?v=1732433045&width=720"
                alt=""
              ></img>
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://www.pattuvastra.com/cdn/shop/files/IMG_8104.jpg?v=1732433045&width=1800"
              alt=""
            ></img>
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">
            Rohith Clothing
          </h1>
          <p className="text-gray-500 font-semibold">Men Black Shirt</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: "primary.main", fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>123 Ratings</span>
          </div>
          <div>
            <div className="price flex item-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800"> ₹ 400</span>
              <span className="line-through text-gray-200"> ₹ 999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sem">
              Inclusive of all taxes. Free Shipping above ₹1500
            </p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: "primary.main" }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: "primary.main" }} />
              <p>100% Money Back Gurantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: "primary.main" }} />
              <p>Free Shipping and return</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: "primary.main" }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add to Bag
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>Description of the product</p>
          </div>
          <div className="mt-12 space-y-5">
            <Reviewcard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
