import React from "react";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory></ElectricCategory>
        <CategoryGrid />
        <div className="pt-20">
          <h1 className="text-center text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10">
            TODAY'S DEAL
          </h1>
          <Deal />
        </div>
        <div className="py-20">
          <h1 className="text-center text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </div>
        <section className="lg:px-20 relative h-[260px] lg:h-[450px] object-cover">
          <img
            className="w-full h-full"
            src="https://segwitz.com/wp-content/uploads/2021/09/why-ecommerce-need-mobile-apps.jpg"
            alt=""
          ></img>
          <div className="flex flex-col justify-center items-center absolute top-1/4 sm:top-1/5 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3">
            <h1 className="bg-white p-2 rounded-md lg:text-4xl font-bold text-[#087CA7]  md:text-2xl">
              Sell Your Product with
            </h1>
            <p className="text-lg md:text-2xl">
              {/* With{" "} */}
              <span className="logo" style={{ color: "white" }}>
                VastraBuy
              </span>
            </p>
            <div className="pt-6 flex justify-center">
              <Button
                startIcon={<Storefront />}
                variant="contained"
                size="large"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
