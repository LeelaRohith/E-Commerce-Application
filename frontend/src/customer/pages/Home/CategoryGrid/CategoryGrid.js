import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://assets.myntassets.com/w_540,q_90,dpr_2,fl_progressive/assets/images/26725078/2023/12/30/2ee22e95-7f60-45cc-919f-72bd626ef2141703911016336KaneevaramBanarasiJacquardSareeWithUnstichedBlousePieceForWo1.jpg"
          alt=""
        ></img>
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          // style={{ height: 720, width: 540 }}
          src="https://images.bestsellerclothing.in/data/selected/10-jan-2024/118607302_1.jpg?width=540&height=720&mode=fill&fill=blur&format=auto"
          alt=""
        ></img>
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://t3.ftcdn.net/jpg/06/80/95/30/240_F_680953070_LDMCNyNSiP11e2lg4TASbysaNfHkYcAw.jpg"
          alt=""
        ></img>
      </div>
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://therichero.com/cdn/shop/files/05copy_7c1944e8-871b-4f23-a4d6-c9f6566b01d9.jpg?v=1707480417&width=3000"
          alt=""
        ></img>
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.thewirecutter.com/wp-content/media/2024/08/androidphones-2048px-04371-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
          alt=""
        ></img>
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://rukminim2.flixcart.com/image/850/1000/jm81zm80/necklace-chain/y/p/8/rnnk6192-chain-rn-original-imaeukvwybenvbax.jpeg?q=90&crop=false"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default CategoryGrid;
