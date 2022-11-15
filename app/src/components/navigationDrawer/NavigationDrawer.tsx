import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { router } from "../../navigation/Navigation";
import { RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "../navigationDrawer/navigationDrawer.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function NavigationDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoaded, setLoading] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img src={"/HBS-logo 1.png"} height={100} width={100}></img>
      </Box>
      <List>
        <a href="/">
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SatelliteAltIcon />
              </ListItemIcon>
              <ListItemText primary={"MyH2info"} />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
      <List>
        <a href="/users">
          <ListItem key={2} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          boxShadow: "none",
          borderRight: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end", borderRight: 0 }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NotificationsNoneOutlinedIcon
            sx={{
              fontSize: 28,
              color: "#747474",
              justifyContent: "flex-end",
              backgroundColor: "#E6F7FC",
              borderRadius: "5px",
            }}
          ></NotificationsNoneOutlinedIcon>
          <AccountCircleOutlinedIcon
            sx={{ fontSize: 28, color: "#747474", justifyContent: "flex-end" }}
          ></AccountCircleOutlinedIcon>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderWidth: 0,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className={"blue-background"}
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/**Pages will be rendered here through react router */}
        {isLoaded ? (
          <RouterProvider router={router} />
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </Box>
    </Box>
  );
}
