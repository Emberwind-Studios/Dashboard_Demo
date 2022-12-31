import * as React from "react";
import { Avatar, Box, TextField } from "@mui/material";
import "../Login/login.css";

export default function LoginForm() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "rgba(28, 126, 217, 0.2)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "auto",
          justifyContent: "center",
          height: "auto",
          flexWrap: "wrap",
          flexDirection: "column",
          margin: "150px 0px 150px 0px",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          padding: "45px 265px 45px 265px",
          border: "2px solid #83BFD2",
        }}
      >
        <Avatar
          src="\HBS-logo 1.png"
          sx={{ height: "200px", width: "200px", marginBottom: "40px" }}
        />
        <TextField
          sx={{ backgroundColor: "#FAFAFa", marginBottom: "10px" }}
          id="outlined-username"
          label="Username"
          type="username"
        />
        <TextField
          sx={{ backgroundColor: "#FAFAFa", marginTop: "10px" }}
          id="outlined-password"
          label="Password"
          type="password"
        />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <p className="a-text">
            <a href="/">Forgot Password?</a>
          </p>
        </Box>
        <button className="signin-button">Sign In</button>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <p>
            <a href="">Don't Have An Account?</a>
          </p>
        </Box>
      </Box>
    </Box>
  );
}
