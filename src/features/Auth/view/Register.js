import React from "react";
import { Box, TextField, Button, Container } from "@mui/material";

const Register = () => {
  return (
    <Container maxWidth="ls">
      <Box
        component="form"
        sx={{ mt: 1, display: "flex", flexDirection: "column" }}
      >
        <TextField
          margin="normal"
          label="Username"
          variant="outlined"
          defaultValue="admin"
          disabled
          fullWidth
        />
        <TextField
          margin="normal"
          label="E-mail"
          variant="outlined"
          fullWidth
          autoFocus
        />
        <TextField
          margin="normal"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
        />
        <TextField
          margin="normal"
          label="Confirm-Password"
          variant="outlined"
          type="password"
          fullWidth
        />
        <Button
          margin="normal"
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "primary.main" }}
          fullWidth
        >
          REGISTER
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
