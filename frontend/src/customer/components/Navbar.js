import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
const Navbar = () => {
  const menuItems = [
    { key: 1, item: "Men" },
    { key: 2, item: "Women" },
    { key: 3, item: "Home & Furniture" },
    { key: 4, item: "Electronics" },
  ];
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <IconButton>
                <MenuIcon></MenuIcon>
              </IconButton>
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                VastraBuy
              </h1>
            </div>
            <ul className="flex items-center font-medium text-gray-800 ">
              {menuItems.map((menuItem, index) => (
                <li
                  className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                  key={menuItem.key}
                >
                  {menuItem.item}
                </li>
              ))}
            </ul>
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
      </Box>
    </>
  );
};

export default Navbar;
