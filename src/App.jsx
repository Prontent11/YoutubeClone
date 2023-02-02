import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import SearchResultPage from "./pages/SearchResultPage";
import ChannelPage from "./pages/ChannelPage";
// import Home from "@mui/icons-material/Home";
import HomePage from "./pages/HomePage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/video/:id",
          element: <VideoPage />,
        },
        {
          path: "/search/:searchTerm",
          element: <SearchResultPage />,
        },
        {
          path: "/channel/:id",
          element: <ChannelPage />,
        },
      ],
    },
  ]);
  return (
    <Box sx={{ background: "#000" }}>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
