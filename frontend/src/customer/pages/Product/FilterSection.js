import {
  Button,
  colors,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { color } from "../../../data/fiter/color";
import { price } from "../../../data/fiter/price";
import { discount } from "../../../data/fiter/discount";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };
  const updateFilterParams = (e) => {
    //console.log(e.target);
    //console.log(searchParams);
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
      //searchParams.forEach((item, value) => console.log(item + "" + value));
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
  const clearAllFilters = () => {
    searchParams.forEach((value, key) => searchParams.delete(key));
    setSearchParams(searchParams);
  };
  return (
    <div className="-z-50 space-y-5 bg-white ">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="text-primary-color cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#031A6B",
                paddingBottom: "14px",
              }}
              className="text-2xl font-semibold"
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue="female"
              name="color"
              onChange={updateFilterParams}
            >
              {color
                .slice(0, expendColor ? color.length : 5)
                .map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item.name}
                    control={<Radio />}
                    label={
                      <div className="flex items-center gap-3">
                        <p>{item.name}</p>
                        <p
                          style={{ backgroundColor: item.hex }}
                          className={`h-5 w-5 rounded-full ${
                            item.name === "White" ? "border" : ""
                          }`}
                        ></p>
                      </div>
                    }
                  />
                ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handleColorToggle}
              className="text-primary-color cursor-pointer hover:text-primary-color flex items-center"
            >
              {expendColor ? "hide" : `+${color.length - 5} more`}
            </button>
          </div>
        </section>
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                paddingBottom: "14px",
                color: "#031A6B",
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              onChange={updateFilterParams}
              aria-labelledby="price"
              defaultValue=""
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={<Radio size="small"></Radio>}
                  label={item.name}
                ></FormControlLabel>
              ))}
            </RadioGroup>
          </FormControl>
        </section>
        <Divider />
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                paddingBottom: "14px",
                color: "#031A6B",
              }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Discound
            </FormLabel>
            <RadioGroup
              name="discount"
              onChange={updateFilterParams}
              aria-labelledby="brand"
              defaultValue=""
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={<Radio size="small"></Radio>}
                  label={item.name}
                ></FormControlLabel>
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
