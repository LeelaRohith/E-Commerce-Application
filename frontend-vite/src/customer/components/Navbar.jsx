import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { maincategory } from "../../data/category/maincategory";
const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  return (
    <>
      <Box sx={{ zIndex: 2 }} className="sticky top-0 left-0 right-0 bg-white ">
        <div className="flex items-center justify-between  lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
              )}
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                VastraBuy
              </h1>
            </div>
            {isLarge && (
              <ul className="flex items-center font-medium text-gray-800 ">
                {maincategory.map((item, index) => (
                  <li
                    onMouseLeave={() => {
                      setShowCategorySheet(false);
                    }}
                    onMouseEnter={() => {
                      setShowCategorySheet(true);
                      setSelectedCategory(item.categoryId);
                    }}
                    className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                    key={index}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-1 lg:gap-6 ">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {false ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  sx={{ width: 30, height: 30 }}
                />
                <h1 className="font-semibold hidden lg:block">Vastra</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCart
                className="text-grey-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseEnter={() => setShowCategorySheet(true)}
            onMouseLeave={() => setShowCategorySheet(false)}
            className="bg-slate-500 categorySheet absolute top-[4.41rem] left-20 right-20 border"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
};

export default Navbar;
