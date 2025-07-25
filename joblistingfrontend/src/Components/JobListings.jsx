import { useEffect, useContext, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import JobCard from "./JobCard";
import axios from "axios";
import { JobsContext, FilteredJobsContext } from "../App";

const JobListings = () => {
  const { jobs, setJobs } = useContext(JobsContext);
  const { filteredJobs } = useContext(FilteredJobsContext);
  const [visibleJobs, setVisibleJobs] = useState([]);

  // 1️⃣ Fetch jobs only once
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/jobs`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200 || response.status === 201) {
          console.log("Jobs fetched successfully!");
          setJobs(response.data);
        } else {
          console.log("Something went wrong.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchJobs();
  }, [setJobs]);

  // 2️⃣ Apply filters when jobs or filters change
  useEffect(() => {
    let result = [...jobs];

    if (filteredJobs?.searchTerm) {
      result = result.filter((job) =>
        job.title?.toLowerCase().includes(filteredJobs.searchTerm.toLowerCase())
      );
    }

    if (
      filteredJobs?.location &&
      filteredJobs.location !== "Preferred Location"
    ) {
      result = result.filter(
        (job) =>
          job.location?.toLowerCase() === filteredJobs.location.toLowerCase()
      );
    }

    if (filteredJobs?.jobType && filteredJobs.jobType !== "Job Type") {
      result = result.filter(
        (job) =>
          job.jobType?.toLowerCase() === filteredJobs.jobType.toLowerCase()
      );
    }

    if (filteredJobs?.salary?.[1] > 0) {
      result = result.filter((job) => {
        const monthlyFrom = job.salaryFrom / 12;
        const monthlyTo = job.salaryTo / 12;
        return (
          monthlyTo >= filteredJobs.salary[0] &&
          monthlyFrom <= filteredJobs.salary[1]
        );
      });
    }

    setVisibleJobs(result);
  }, [jobs, filteredJobs]);

  return (
    <Box
      sx={{
        width: "1312px",
        minHeight: "360px",
        position: "absolute",
        top: "265px",
        left: "92px",
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2}>
        {visibleJobs.length > 0 ? (
          visibleJobs.map((job) => (
            <Grid item xs={12} sm={6} md={3} key={job._id}>
              <JobCard job={job} />
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "SatoshiVariable, sans-serif",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No jobs found.
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default JobListings;
