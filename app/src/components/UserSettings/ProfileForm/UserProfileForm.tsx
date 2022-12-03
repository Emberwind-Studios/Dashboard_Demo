import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        height: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          border: "solid #919EAB",
          borderWidth: 1,
          borderRadius: "15px",
          height: 440,
          width: 445,
          padding: "50px",
          marginRight: "50px",
        }}
      >
        <Box sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Avatar
            sx={{ width: "180px", height: "180px", backgroundColor: "#eeeeee" }}
          >
            <AddAPhotoOutlinedIcon
              sx={{ width: "75px", height: "75px", color: "#686868"}}
            ></AddAPhotoOutlinedIcon>
          </Avatar>
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
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            border: "solid #919EAB",
            borderWidth: 1,
            borderRadius: "15px",
            height: 560,
            width: 650,
            padding: "50px",
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
        <button>hello</button>
      </Box>
    </Box>
  );
}
