  import { useContext, useState } from "react";
  import { AppBar, Typography, Button, Box, Container } from "@mui/material";
  import {ModalContext} from "../App";
  import { Link as RouterLink } from "react-router-dom";

  const Navbar = () => {
    const {setIsModalOpen } =useContext(ModalContext);

    const navLinks = [
      { label: "Home", path: "/home" },
      { label: "Find Jobs", path: "/" },
      { label: "Find Talents", path: "/talents" },
      { label: "About Us", path: "/about" },
      { label: "Testimonials", path: "/testimonials" },
    ];

    return (
      <>
        <AppBar
          color="rgba(255, 255, 255, 1)"
          position="static"
          elevation={1}
          sx={{
            width: "890px",
            height: "80px",
            borderRadius: "122px",
            mx: "auto", // center horizontally
            mt: "21px", // match top spacing
            px: 0,
            justifyContent: "center",
          }}
        >
          <Container
            disableGutters
            sx={{
              width: "838px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pl: "26px",
              pr: "26px",
              fontFamily: "SatoshiVariable, sans-serif",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: "44px",
                height: "44.68px",
                display: "flex",
                alignItems: "center",
                fontFamily: "SatoshiVariable, sans-serif",
              }}
            >
              <Box
                component="img"
                src="/company.png"
                alt="company-logo"
                sx={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                fontFamily: "SatoshiVariable, sans-serif",
              }}
            >
              {/* Navbar links (613x48) */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "613px",
                  height: "48px",
                  justifyContent: "space-evenly",
                  fontFamily: "SatoshiVariable, sans-serif",
                }}
              >
                {navLinks.map((item) => (
                  <Typography
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: "text.primary",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "SatoshiVariable, sans-serif",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>

              {/* Create Job Button (outside 613px box) */}
              <Button
                variant="contained"
                onClick={() => setIsModalOpen(true)}
                sx={{
                  width: "133px",
                  height: "48px",
                  borderRadius: "30px",
                  padding: "8px 24px",
                  gap: "11px",
                  fontFamily: "SatoshiVariable, sans-serif",
                  background:
                    "linear-gradient(90deg, rgba(161, 40, 255, 1) 0%, rgba(97, 0, 173, 1) 100%)",
                  textTransform: "none",
                }}
              >
                Create Jobs
              </Button>
            </Box>
          </Container>
        </AppBar>
      </>
    );
  };

  export default Navbar;
