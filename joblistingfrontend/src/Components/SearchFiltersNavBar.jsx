import { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Slider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import Navbar from "./NavBar";
import { useContext } from "react";
import { FilteredJobsContext } from "../App";

const SearchFilters = () => {
  const [salary, setSalary] = useState([0, 150000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Preferred Location");
  const [jobType, setJobType] = useState("Job Type");
  const { setFilteredJobs } = useContext(FilteredJobsContext);

  const handleFilterChange = (updatedFilters = {}) => {
    const filters = {
      searchTerm,
      location,
      jobType,
      salary,
      ...updatedFilters,
    };
    console.log("SearchFilters - Applying filters:", filters);
    setFilteredJobs(filters);
  };

  return (
    <Box
      sx={{
        width: "1440px",
        height: "214px",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: "auto",
        padding: "0",
        fontFamily: "SatoshiVariable, sans-serif",
      }}
    >
      {/* Navbar on top */}
      <Navbar />

      {/* Filter Box */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          fontFamily: "SatoshiVariable, sans-serif",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRight: "2px solid rgba(234,234,234,1)",
            pr: 2,
            display: "flex",
            alignItems: "center",
            height: "48px",
            fontFamily: "SatoshiVariable, sans-serif",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search By Job Title, Role"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilterChange({ searchTerm: e.target.value });
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // removes the border
              },
              color: "rgba(104,104,104,1)",
            }}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "rgba(104,104,104,1)", mr: 2 }} />
              ),
              sx: {
                borderRadius: "8px",
                backgroundColor: "#fff",
                fontFamily: "SatoshiVariable, sans-serif",

                height: "48px",
                "& input::placeholder": {
                  color: "#4a4a4a",
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        {/* Location Dropdown */}
        <Box
          sx={{
            flex: 1,
            borderRight: "2px solid rgba(234,234,234,1)",
            pr: 2,
            display: "flex",
            alignItems: "center",
            height: "48px",
            fontFamily: "SatoshiVariable, sans-serif",
          }}
        >
          <FormControl fullWidth size="small" variant="outlined">
            <Select
              value={location}
              onChange={(e) => {
                const newLocation = e.target.value;
                setLocation(newLocation);
                handleFilterChange({ location: newLocation });
              }}
              startAdornment={
                <LocationOnIcon sx={{ color: "rgba(104,104,104,1)", mr: 2 }} />
              }
              displayEmpty
              MenuProps={{
                disableAutoFocusItem: true,
              }}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#fff",
                height: "48px",
                fontFamily: "SatoshiVariable, sans-serif",
                color: "rgba(104,104,104,1)",

                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="Preferred Location">Preferred Location</MenuItem>
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Gurgaon">Gurgaon</MenuItem>
              <MenuItem value="San Francisco">San Francisco</MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Delhi NCR">Delhi NCR</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Job Type Dropdown */}
        <Box
          sx={{
            flex: 1,
            borderRight: "2px solid rgba(234,234,234,1)",
            pr: 2,
            fontFamily: "SatoshiVariable, sans-serif",

            display: "flex",
            alignItems: "center",
            height: "48px",
          }}
        >
          <FormControl fullWidth size="small" variant="outlined">
            <Select
              value={jobType}
              onChange={(e) => {
                const newJobType = e.target.value;
                setJobType(newJobType);
                handleFilterChange({ jobType: newJobType });
              }}
              startAdornment={
                <WorkIcon sx={{ color: "rgba(104,104,104,1)", mr: 2 }} />
              }
              displayEmpty
              MenuProps={{
                disableAutoFocusItem: true,
              }}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#fff",
                height: "48px",
                fontFamily: "SatoshiVariable, sans-serif",
                color: "rgba(104,104,104,1)",

                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="Job Type">Job Type</MenuItem>
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Salary Slider */}
        <Box sx={{ flex: 1 }}>
          <Box>
            <Box display="flex" justifyContent="space-between" mb={0.3}>
              <Typography variant="subtitle1" color="rgba(34,34,34,1)">
                Salary Per Month
              </Typography>
              <Typography variant="subtitle1" weight={600} color="rgba(34,34,34,1)">
                {`₹${(salary[0] / 1000).toLocaleString()}k - ₹${(
                  salary[1] / 1000
                ).toLocaleString()}k`}
              </Typography>
            </Box>
            <Slider
              value={salary} // now [min, max]
              onChange={(e, newVal) => {
                setSalary(newVal); // newVal is [min, max]
                handleFilterChange({ salary: newVal });
              }}
              min={0}
              max={150000}
              step={1000}
              valueLabelDisplay="off"
              size="small"
              sx={{
                color: "rgba(34,34,34,1)",
                fontFamily: "SatoshiVariable, sans-serif",

                height: 2,
                "& .MuiSlider-thumb": {
                  width: 10,
                  height: 10,
                  borderRadius: "20px", // less rounded
                  backgroundColor: "black",
                  "&:hover": {
                    boxShadow: "0 0 0 4px rgba(0, 0, 0, 0.1)",
                  },
                },
                "& .MuiSlider-rail": {
                  height: 2,
                  opacity: 0.3,
                  backgroundColor: "rgba(34,34,34,1)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchFilters;
