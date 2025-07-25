const Job = require("../models/Job");

const DEFAULT_LOGO_URL =
  "https://clipground.com/images/random-logo-clipart-1.png";

const createJob = async (req, res) => {
  try {
    let jobs;

    if (Array.isArray(req.body)) {
      // Add default logo to each job if not provided
      const jobArray = req.body.map((job) => ({
        ...job,
        logo:DEFAULT_LOGO_URL,
      }));

      jobs = await Job.insertMany(jobArray);
      res.status(201).json({ message: "Jobs created successfully", jobs });
    } else {
      // Add default logo if not provided in single job
      const jobData = {
        ...req.body,
        logo: req.body.logo || DEFAULT_LOGO_URL,
      };

      const job = new Job(jobData);
      const savedJob = await job.save();
      res
        .status(201)
        .json({ message: "Job created successfully", jobs: savedJob });
    }
  } catch (error) {
    console.error("Error creating job(s):", error);
    res
      .status(500)
      .json({ error: "Error creating job(s)", error: error.message });
  }
};


// Get Jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // -1 for descending order
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      error: "Error fetching jobs",
      errorMessage: error.message,
    });
  }
};
module.exports = { createJob, getJobs };
