import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import AccountTree from "@mui/icons-material/AccountTree";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { NavLink } from "react-router-dom";
import { Box, Toolbar, useTheme } from "@mui/material";

export default function NavDrawer() {
    const theme = useTheme();
    return (
    <div>
      <Toolbar />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img
          src={"/HBS-TM-logo-400px.webp"}
          height={100}
          width={150}
          alt="hydrobioscience logo"
        ></img>
      </Box>
      <h1 style={{ paddingLeft: 27, marginTop: 27, fontSize: 20 }}>General</h1>
      <List className={"sidebar-navigation"}>
        <ListItem key={1} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            to="/"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <SatelliteAltIcon />
              </ListItemIcon>
              <ListItemText primary={<>MyH2Oinfo &trade;</>} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={2} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            to="/stations-directory"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <ListItemText primary={"Directory"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={3} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            to="/trends"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Trends"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={4} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            to="/reports"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <ContentPasteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Reports"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={5} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            to="/addons"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <DashboardCustomizeOutlinedIcon className={"sidebar-icon"} />
              </ListItemIcon>
              <ListItemText primary={"Addons"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <h1 style={{ paddingLeft: 27, marginTop: 30, fontSize: 20 }}>Admin</h1>

        <ListItem key={6} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            to="/users"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"users"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </div>
    )
};