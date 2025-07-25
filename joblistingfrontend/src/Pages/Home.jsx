import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate();
  return (
    <Container maxWidth="md">
      <Box py={6} textAlign="center">
        <Box
          component="img"
          src="/company.png" // Ensure logo.png is placed in the public/ folder
          alt="Company Logo"
          sx={{
            width: 100,
            height: 100,
            objectFit: "contain",
            mb: 3,
          }}
        />

        <Typography variant="h3" gutterBottom>
          Welcome to JobConnect
        </Typography>
        <Typography variant="body1" paragraph>
          JobConnect is your one-stop platform to find top opportunities or the
          right talent. Whether you're a job seeker or recruiter, we make the
          connection easy, fast, and effective.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the latest job openings, filter by your preferences, and apply
          seamlessly. Stay ahead with real-time notifications, personalized
          suggestions, and smart features.
        </Typography>
        <Typography variant="body1" paragraph>
          Join our community and take the next step in your career or hiring
          journey.
        </Typography>
        <Button variant="contained" color="primary" onClick={()=>navigate("/")}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
