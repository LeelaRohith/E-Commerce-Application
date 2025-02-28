import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import React from "react";

const Reviewcard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={8}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FFD" }}
            >
              {" "}
              L{" "}
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Rohith</p>
              <p className="opacity-70">01-01-2025</p>
            </div>
          </div>
          <Rating readOnly value={5} precision={0.5} />
          <p>value for money product, great product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://www.pattuvastra.com/cdn/shop/files/IMG_8105.jpg?v=1732433045&width=720"
              alt=""
            ></img>
          </div>
        </Grid2>
      </Grid2>
      <div>
        <IconButton>
          <Delete sx={{ color: "#FF0000" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Reviewcard;
