import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  MenuItem,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ModalContext, JobsContext } from "../App";

const CreateJobModal = () => {
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { jobs, setJobs } = useContext(JobsContext);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "Select Location",
    jobType: "Job Type",
    salaryFrom: "",
    salaryTo: "",
    deadline: "",
    description: "",
  });
  const preferredLocations = [
    "Select Location",
    "Bengaluru",
    "Mumbai",
    "Coimbatore",
    "Chennai",
    "Kolkatta",
    "Delhi NCR",
    "Kochi",
    "Pune",
    "Visakhapatnam",
    "Hyderabad",
  ];

  useEffect(() => {
    // Disable scroll when modal opens
    document.body.style.overflow = "auto";

    // Re-enable scroll when modal unmounts
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isModalOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      company,
      location,
      jobType,
      salaryFrom,
      salaryTo,
      deadline,
      description,
    } = formData;

    // Basic empty field check
    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      !salaryFrom ||
      !salaryTo ||
      !deadline ||
      !description
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Location validation
    if (location === "Select Location") {
      alert("Please select a valid location.");
      return;
    }

    // Job Type validation
    if (jobType === "Job Type") {
      alert("Please select a valid job type.");
      return;
    }

    // Salary range validation
    if (Number(salaryFrom) >= Number(salaryTo)) {
      alert("Salary 'From' must be less than 'To'.");
      return;
    }

    // Deadline must be a future date
    const today = new Date();
    const selectedDate = new Date(deadline);
    if (selectedDate <= today) {
      alert("Application deadline must be a future date.");
      return;
    }

    const payload = {
      ...formData,
      salaryFrom: Number(salaryFrom),
      salaryTo: Number(salaryTo),
      deadline: selectedDate.toISOString(),
      description: description.trim(),
    };

    try {
      const response = await axios.post(`${apiUrl}/api/jobs`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Job posted successfully!");
        setJobs([response.data.jobs, ...jobs]);

        // Reset form
        setFormData({
          title: "",
          company: "",
          location: "Select Location",
          jobType: "Job Type",
          salaryFrom: "",
          salaryTo: "",
          deadline: "",
          description: "",
        });

        setIsModalOpen(false);
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again.");
    }
  };

  const handleSaveDraft = () => {
    //To be implemented in real-timescenarion as of now it just hardcoded
    const {
      title,
      company,
      location,
      jobType,
      salaryFrom,
      salaryTo,
      deadline,
      description,
    } = formData;

    if (
      !title ||
      !company ||
      !location ||
      !jobType ||
      !salaryFrom ||
      !salaryTo ||
      !deadline ||
      !description
    ) {
      alert("Please fill in all fields before saving as draft.");
      return;
    }

    if (location === "Select Location") {
      alert("Please select a valid location.");
      return;
    }

    if (jobType === "Job Type") {
      alert("Please select a valid job type.");
      return;
    }

    if (Number(salaryFrom) >= Number(salaryTo)) {
      alert("Salary 'From' must be less than 'To'.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(deadline);
    if (selectedDate <= today) {
      alert("Application deadline must be a future date.");
      return;
    }

    // If all checks pass
    alert("Draft saved successfully!");
    setIsModalOpen(false);
  };

  return (
    <Dialog
      maxWidth={false}
      open={isModalOpen}
      PaperProps={{
        sx: {
          width: "848px",
          height: "779px",
          borderRadius: 2,
          overflow: "visible",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 600,
          mb: "59px",
          mt: "32px",
          padding: "0px",
          fontFamily: "SatoshiVariable, sans-serif",
        }}
      >
        Create Job Opening
        <IconButton
          aria-label="close"
          onClick={() => setIsModalOpen(false)}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 3, overflow: "visible" }}>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Row 1: Job Title & Company Name */}
          <Box display="flex" gap={2} mb={2}>
            <Box width={376}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Job Title
              </Typography>
              <TextField
                fullWidth
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // adjust the value as needed
                  },
                  fontFamily: "SatoshiVariable, sans-serif",
                }}
              />
            </Box>
            <Box width={376}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Company Name
              </Typography>
              <TextField
                fullWidth
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // adjust the value as needed
                  },
                  fontFamily: "SatoshiVariable, sans-serif",
                }}
              />
            </Box>
          </Box>

          {/* Row 2: Location & Job Type */}
          <Box display="flex" gap={2} mb={2}>
            <Box width={376}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Location
              </Typography>
              <TextField
                fullWidth
                select
                name="location"
                value={formData.location}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // adjust the value as needed
                  },
                  fontFamily: "SatoshiVariable, sans-serif",
                }}
              >
                <MenuItem value="">Select Location</MenuItem>

                {preferredLocations?.map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box width={376}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Job Type
              </Typography>
              <TextField
                fullWidth
                select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // adjust the value as needed
                  },
                  fontFamily: "SatoshiVariable, sans-serif",
                }}
              >
                <MenuItem value="Job Type">Job Type</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Row 3: Salary Range & Deadline */}
          <Box display="flex" gap={2} mb={2}>
            <Box width={376}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Salary Range
              </Typography>
              <Box display="flex" gap={1}>
                <TextField
                  fullWidth
                  type="number"
                  name="salaryFrom"
                  label="From"
                  value={formData.salaryFrom}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px", // adjust the value as needed
                    },
                    fontFamily: "SatoshiVariable, sans-serif",
                  }}
                />
                <TextField
                  fullWidth
                  type="number"
                  name="salaryTo"
                  label="To"
                  value={formData.salaryTo}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px", // adjust the value as needed
                    },
                  }}
                />
              </Box>
            </Box>
            <Box width={376}>
              <Typography fontSize={14} fontWeight={500} mb={0.5}>
                Application Deadline
              </Typography>
              <TextField
                fullWidth
                type="date"
                name="deadline"
                InputLabelProps={{ shrink: true }}
                value={formData.deadline}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // adjust the value as needed
                  },
                  fontFamily: "SatoshiVariable, sans-serif",
                }}
              />
            </Box>
          </Box>

          {/* Row 4: Job Description (full width) */}
          <Box mb={2} width={768}>
            <Typography fontSize={14} fontWeight={500} mb={0.5}>
              Job Description
            </Typography>
            <TextareaAutosize
              minRows={5}
              maxRows={6}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                resize: "none",
                overflowY: "auto", // 👈 shows scroll only when needed
                outline: "none",
                maxHeight: "169px", // optional: limit height to avoid infinite growth
                fontFamily: "SatoshiVariable, sans-serif",
              }}
            />
          </Box>

          {/* Buttons */}
          <Box display="flex" justifyContent="space-between" mt={4} width={768}>
            <Button
              variant="outlined"
              endIcon={"⇓"}
              onClick={handleSaveDraft}
              sx={{
                textTransform: "none",
                color: "black",
                border: "1px solid black",
                fontFamily: "SatoshiVariable, sans-serif",
              }}
            >
              Save Draft
            </Button>
            <Button
              variant="contained"
              type="submit"
              endIcon={"»"}
              fontSize={200}
              sx={{
                backgroundColor: "rgba(0, 170, 255, 1)",
                "&:hover": { backgroundColor: "#1d4ed8" },
                textTransform: "none",
                fontFamily: "SatoshiVariable, sans-serif",
              }}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobModal;
