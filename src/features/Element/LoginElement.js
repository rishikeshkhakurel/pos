import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const LoginElement = () => {
  const location = useLocation();
  const [pathname, setpathname] = useState("");
  useEffect(() => {
    if (location.pathname === "/auth/login") {
      setpathname("Sign in");
    }
    if (location.pathname === "/auth/register") {
      setpathname("Register");
    }
  }, [location.pathname]);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="h1" variant="h2" sx={{ fontWeight: "500" }}>
        {pathname}
      </Typography>
      <Outlet />
    </Box>
  );
};

export default LoginElement;
