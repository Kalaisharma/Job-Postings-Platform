import { Container, Typography, Box, Grid, Button } from "@mui/material";

const FindTalents = () => {
  return (
    <Container maxWidth="md">
      <Box py={6}>
        <Typography variant="h4" gutterBottom>
          Find the Right Talent, Fast
        </Typography>
        <Typography variant="body1" paragraph>
          Access a wide pool of skilled professionals across various domains
          like tech, design, marketing, and more. Use smart filters to find the
          perfect match for your requirements.
        </Typography>
        <Typography variant="body1" paragraph>
          Our intelligent matching algorithm helps you identify candidates with
          relevant skills and experience. Save time and hire efficiently.
        </Typography>
        <Typography variant="body1" paragraph>
          Post jobs, manage applicants, and streamline your hiring process with
          our easy-to-use dashboard.
        </Typography>
        <Button variant="contained" color="secondary" onClick={()=>{window.location.href="/" }}>
          Post a Job Now
        </Button>
      </Box>
    </Container>
  );
};

export default FindTalents;
