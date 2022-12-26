import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';

const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Viewer",
    label: "Viewer",
  },
];

export default function UserProfileForm() {
  const [role, setRole] = React.useState("Admin");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Box className="form-bg-box">
      <Box
        className="photo-box"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IconButton color="default" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" src="upload"/>
        <Avatar sx={{width:"180px", height:"180px"}} />
      </IconButton>
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Name"
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Phone Number"
            type="integer"
          />
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          className="form-box"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Name"
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Phone Number"
            type="integer"
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined-select-role"
            select
            label="Role"
            value={role}
            onChange={handleChange}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Work Number"
            type="integer"
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Email"
            style={{ width: 510 }}
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Notes"
            type="string"
            style={{ width: 510 }}
            multiline
            rows={5}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <button className="save-button">Save</button>
      </Box>
    </Box>
  );
}
