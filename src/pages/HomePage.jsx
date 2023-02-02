import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../fetchFromAPI";
// import categories from "../utils/categories";
const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} color="white">
          {selectedCategory + " "}
          <span
            style={{
              color: "#F31503",
            }}
          >
            videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default HomePage;
