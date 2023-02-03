import { CheckCircle } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Videos from "../components/Videos";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../fetchFromAPI";

const VideoPage = () => {
  const { id } = useParams();
  //this is our main video
  const [video, setVideo] = useState(null);

  //this are our suggested videos
  const [sugVideos, setSugVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideo(data.items[0]);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setSugVideos(data.items);
      }
    );
  }, [id]);
  if (!video?.snippet) return <>Loading...</>;
  const {
    snippet: { channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", postion: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {channelTitle}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  ></CheckCircle>
                </Typography>
              </Link>
              <Stack direction="row" gap={"20px"} alignItems="center">
                <Typography varaint="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()}views
                </Typography>
                <Typography varaint="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()}views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={sugVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoPage;
