import { Container, Typography, Box, Paper } from "@mui/material";

const Testimonials = () => {
  return (
    <Container maxWidth="md">
      <Box py={6}>
        <Typography variant="h4" gutterBottom>
          What Our Users Say
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Typography variant="subtitle1">“Game-changer for hiring”</Typography>
          <Typography variant="body2">
            We hired our frontend team using JobConnect within 2 weeks —
            smoother than any job portal we’ve used.
          </Typography>
          <Typography variant="caption">
            – Ankit, Tech Lead at Startify
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Typography variant="subtitle1">
            “Helped me land my dream job”
          </Typography>
          <Typography variant="body2">
            The platform is intuitive and fast. I applied for 5 roles and got 3
            callbacks within a few days.
          </Typography>
          <Typography variant="caption">– Shruti, UI Developer</Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="subtitle1">
            “Impressive support & features”
          </Typography>
          <Typography variant="body2">
            The resume parser and instant alerts make this my go-to job board.
            Highly recommend it!
          </Typography>
          <Typography variant="caption">
            – Naveen, Full Stack Engineer
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Testimonials;
