import { Box, Typography, Avatar, Button, Chip } from "@mui/material";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { useState } from "react";

// Function to calculate time difference
const getTimeAgo = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInMs = now - createdDate;

  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInHours < 1) {
    return "Just now";
  } else if (diffInHours < 24) {
    return diffInHours === 1 ? "1h Ago" : `${diffInHours}h Ago`;
  } else {
    return diffInDays === 1 ? "1D Ago" : `${diffInDays}D Ago`;
  }
};


const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const jobTypesExperience = {
    "Internship": "0-1 yr Exp",
    "Full-time": "2-5 yr Exp",
    "Part-time": "6-7 yr Exp",
    "Contract": "3-7 yr Exp",
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "341px",
        width: "284px",
        bgcolor: "white",
        borderRadius: "12px",
        boxShadow: 2,
        opacity: 1,
        padding: "7px 16px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "SatoshiVariable, sans-serif",
      }}
    >
      {/* Time badge */}
      <Chip
        label={getTimeAgo(job?.createdAt)}
        size="medium"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "rgba(176, 217, 255, 1)",
          color: "black",
          fontSize: "12px",
          fontFamily: "SatoshiVariable, sans-serif",
          width: "75px",
          height: "33px",
          borderRadius: "10px",
        }}
      />

      {/* Logo / Icon */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1, mt: 2 }}>
        {job?.logo ? (
          <Avatar
            src={job?.logo}
            alt="Company Logo"
            sx={{ width: 83.46, height: 82, borderRadius: "13.18px" }}
            variant="square"
          />
        ) : (
          <Avatar
            sx={{
              width: 83.46,
              height: 82,
              bgcolor: "#e0e0e0",
              borderRadius: "13.18px",
            }}
            variant="square"
          >
            <FaBriefcase style={{ color: "#6b7280", fontSize: "22px" }} />
          </Avatar>
        )}
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            height: "27px",
            fontWeight: "700",
            fontFamily: "SatoshiVariable, sans-serif",
            fontStyle: "bold",
          }}
        >
          {job?.title}
        </Typography>
      </Box>
      {/* Meta Details */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          mt: 2,
          height: "22px",
          fontSize: 14,
          justifyContent: "space-between",
          fontFamily: "SatoshiVariable, sans-serif",
          color: "rgba(90,90,90,1)",
          fontWeight: "500",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "SatoshiVariable, sans-serif",
          }}
        >
          <MdWork />
          {jobTypesExperience[job?.jobType] || "N/A"}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "SatoshiVariable, sans-serif",
          }}
        >
          <FaMapMarkerAlt />
          {job?.jobType || "N/A"}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "SatoshiVariable, sans-serif",
          }}
        >
          <FaBriefcase />₹
          {job?.salaryTo ? job?.salaryTo / 100000 + "LPA" : "N/A"}
        </Box>
      </Box>

      {/* Description */}
      <Box sx={{ mt: 2.5, flexGrow: 1, minHeight: 70 }}>
        <Typography
          variant="body2"
          sx={{
            height: "76px",
            overflowY: "auto", // Enables vertical scroll
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "none" : 4,
            WebkitBoxOrient: "vertical",
            maxHeight: isExpanded ? "none" : 100,
            fontFamily: "SatoshiVariable, sans-serif",
            color: "rgba(85,85,85,1)",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {job?.description && job?.description.trim()
            ? job.description
            : "No description available"}
        </Typography>
      </Box>

      {/* Apply Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2.5,
          borderRadius: 2,
          border: " 1px solid rgba(0, 170, 255, 1)",
          backgroundColor: "rgba(0, 170, 255, 1)",
          textTransform: "none",
          fontFamily: "SatoshiVariable, sans-serif",

          "&:hover": {
            backgroundColor: "#0ea5e9",
          },
        }}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default JobCard;
