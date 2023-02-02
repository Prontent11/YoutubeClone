import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Stack } from "@mui/material";
import categories from "../utils/categories";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  //   console.log(categories);

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        padding: { sx: "auto", md: "10px" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "white",
              color: category.name === selectedCategory ? "black" : "white",
            }}
            key={category.name}
            onClick={() => {
              if (category.type != "none") {
                setSelectedCategory(category.name);
              }
            }}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "black" : "white",
                marginRight: "15px",
              }}
            >
              {category?.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category?.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
