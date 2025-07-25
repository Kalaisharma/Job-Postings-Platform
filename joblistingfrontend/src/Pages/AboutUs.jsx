import { Container, Typography, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Box py={6}>
        <Typography variant="h4" gutterBottom>
          About JobConnect
        </Typography>
        <Typography variant="body1" paragraph>
          At JobConnect, our mission is to bridge the gap between job seekers
          and employers through innovative technology and human-centered design.
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2024, we are a team of engineers, designers, and recruiters
          passionate about transforming how people find work and how companies
          build their teams.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform serves thousands of users across the country, supporting
          both startups and large enterprises.
        </Typography>
        <Typography variant="body1" paragraph>
          We believe in transparency, simplicity, and empowerment in the hiring
          process.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
