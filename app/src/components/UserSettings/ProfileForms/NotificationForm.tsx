import Box from "@mui/material/Box";
import "./userSettings.css";
import Divider from "@mui/material/Divider";
import Timeset from "../TimePicker";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function NotificationForm() {
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
              control={<Switch />}
              label="Email"
              labelPlacement="start"
            />
            <FormControlLabel
              value="left"
              control={<Switch />}
              label="Phone"
              labelPlacement="start"
            />
            <p>
              Select the time period to recieve your notifications set in the
              stations page.
            </p>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className="save-button">Save</button>
        </Box>
      </Box>
    </Box>
  );
}
