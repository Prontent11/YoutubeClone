import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
const categories = [
  {
    name: "Trending",
    icon: <HomeIcon />,
    type: "useful",
  },
  { name: "Coding", icon: <CodeIcon />, type: "useful" },
  { name: "ReactJS", icon: <CodeIcon />, type: "useful" },
  { name: "NextJS", icon: <CodeIcon />, type: "useful" },
  { name: "Music", icon: <MusicNoteIcon />, type: "useful" },
  { name: "Education", icon: <SchoolIcon />, type: "useful" },
  { name: "Podcast", icon: <GraphicEqIcon />, type: "useful" },
  { name: "Movie", icon: <OndemandVideoIcon />, type: "useful" },
  { name: "Gaming", icon: <SportsEsportsIcon />, type: "useful" },
  { name: "Live", icon: <LiveTvIcon />, type: "useful" },
  { name: "Sport", icon: <FitnessCenterIcon />, type: "useful" },
  { name: "Fashion", icon: <CheckroomIcon />, type: "useful" },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon />, type: "useful" },
  { name: "Comedy", icon: <TheaterComedyIcon />, type: "useful" },
  { name: "Gym", icon: <FitnessCenterIcon />, type: "useful" },
  { name: "Crypto", icon: <DeveloperModeIcon />, type: "useful" },
  { name: "Settings", icon: <SettingsIcon />, type: "none" },
  { name: "Help", icon: <QuizIcon />, type: "none" },
];

export default categories;
