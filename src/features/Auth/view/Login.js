import React from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import useLogin from "../hooks/useLogin";

function Login() {
  const { handleOnChange, onSubmit, error } = useLogin();
  return (
    <Container maxWidth="ls">
      <form onSubmit={onSubmit}>
        <Box
          sx={{ mt: 1, display: "flex", flexDirection: "column" }}
        >
          <TextField
            margin="normal"
            name="email"
            label="Username or E-mail"
            variant="outlined"
            fullWidth
            autoFocus
            onChange={handleOnChange}
          />
          <TextField
            margin="normal"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={handleOnChange}
          />
          <Typography>Email: admin, Password:"password"</Typography>
          {error && <Typography variant="error" >{error.error}</Typography>}
          <Button
            margin="normal"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "primary.main" }}
            fullWidth
          >
            SIGN IN
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Login;
