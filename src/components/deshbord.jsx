import * as React from "react";
import PropTypes from "prop-types";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AppBar from "@mui/material/AppBar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import CardUser from "./card.jsx";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import TransitionsModal from "./modal.jsx";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className=" flex justify-center flex-col items-center">
      <div>
        <img
          width={100}
          src="https://tse2.mm.bing.net/th?id=OIP.Nxx0ApOiAfYIptz5h3Z0pgAAAA&pid=Api&P=0&h=220"
        />
      </div>
      <List>
        <ListItem key={"Students"}>
          <ListItemButton
            style={{
              width: "100%",
            }}
          >
            <ListItemIcon>
              <PermIdentityIcon
                style={{
                  color: "#90c150",
                }}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: "#0073c9",
              }}
              primary={"Students"}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          style={{
            color: "#0073c9",
          }}
          key={"Attendance"}
        >
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIndIcon
                style={{
                  color: "#90c150",
                }}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: "#0073c9",
              }}
              primary={"Attendance"}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <div>
              <p>
                <IconButton>
                  <AccountCircleRoundedIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                  <span className=" text-[20px] pl-2 text-[#fff]">
                    {" "}
                    Students
                  </span>
                </IconButton>
              </p>
            </div>
          </Box>
          <div className=" flex justify-end items-center w-full">
          
              <Box
                variant="contained"
                style={{
                  backgroundColor: "#fff",
                  color: "#0073c9",
                }}
              >
                
                        <TransitionsModal />
                        
              </Box>
           
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <div className=" flex justify-around w-full shadow-lg h-9 p-2 mb-3">
          <p className=" text-[#1775ce] font-[ralway] font-semibold">ID</p>
          <p className=" text-[#1775ce] font-[ralway] font-semibold">
            Profile Img
          </p>
          <p className=" text-[#1775ce] font-[ralway] font-semibold">Name</p>
          <p className=" text-[#1775ce] font-[ralway] font-semibold">
            Course Name
          </p>
          <p className=" text-[#1775ce] font-[ralway] font-semibold">
            Passwrod
          </p>
        </div>
        <CardUser id={1} img={"https://tse1.mm.bing.net/th?id=OIP.4ba0a4U7RchHI-HWDSrsiwHaHa&pid=Api&P=0&h=220"} courseName={"web and ap development"} name={"umar"} password={123456}  />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
