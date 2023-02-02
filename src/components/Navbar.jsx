import React from "react";
import { IconButton, Stack } from "@mui/material";
// import { logo } from "../utils/constant";
import { Link, Outlet } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box } from "@mui/system";
import { VideoCall } from "@mui/icons-material";
import ytlogo from "../assests/yt-logo-mobile.png";
const Navbar = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        p="20px"
        position={"sticky"}
        backgroundColor="#000"
        top={"0"}
      >
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={ytlogo} alt="logo" height={"45"} />
        </Link>
        <SearchBar />
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            gap: "30px",
          }}
        >
          <VideoCall sx={{ color: "white", cursor: "pointer" }} />
          <NotificationsIcon sx={{ color: "white", cursor: "pointer" }} />
        </Box>
      </Stack>

      <Outlet />
    </>
  );
};

export default Navbar;
