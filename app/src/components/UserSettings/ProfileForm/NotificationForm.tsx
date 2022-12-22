import * as React from "react";
import Box from "@mui/material/Box";
import "./userSettings.css";
import Divider from "@mui/material/Divider";
import Timeset from "../TimePicker";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const roles = [
  {
    value: "Time",
    label: "Time",
  },
  {
    value: "Disabled",
    label: "Disabled",
  },
];

export default function NotificationForm() {
  const [role, setRole] = React.useState("Disabled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Box className="form-bg-box">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box
            className="noti-box"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Divider textAlign="left">Time Notifications</Divider>
            <Timeset></Timeset>

            <FormControlLabel
              value="left"
              control={<Switch color="primary" />}
              label="Email"
              labelPlacement="start"
            />
            <FormControlLabel
              value="left"
              control={<Switch color="primary" />}
              label="Phone"
              labelPlacement="start"
            />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button>hello</button>
        </Box>
      </Box>
    </Box>
  );
}
