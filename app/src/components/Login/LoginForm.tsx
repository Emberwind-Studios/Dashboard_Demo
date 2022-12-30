import * as React from "react";
import { Avatar, Box, TextField } from "@mui/material";



export default function LoginForm() {
  return (
    <Box sx={{ height: "100%", backgroundColor: "rgba(28, 126, 217, 0.2)", display:"flex", justifyContent:"center" }}>
      <Box
        sx={{
          display: "flex",
          width: "auto",
          justifyContent: "center",
          height: "auto",
          flexWrap: "wrap",
          flexDirection:"column",
          margin:"150px 0px 150px 0px",
          backgroundColor: "#ffffff",
          border: "1px solid #919eab",
          borderRadius:"15px",
          padding:"45px 265px 45px 265px"
        }}
      >
        <Avatar src="\HBS-logo 1.png" sx={{height:"200px", width:"200px", marginBottom:"40px"}}/>
        <TextField
          sx={{ backgroundColor: "#FAFAFa", marginBottom:"10px" }}
          id="outlined-username"
          label="Username"
          type="username"
        />
        <TextField
          sx={{ backgroundColor: "#FAFAFa", marginTop:"10px" }}
          id="outlined-password"
          label="Password"
          type="password"
        />
        <p><a href="/">Forgot Password?</a></p>
        <button className="save-button">Sign In</button>
        <p>Don't Have An Account?</p>
      </Box>
    </Box>
  );
}
