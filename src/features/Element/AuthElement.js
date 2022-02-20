import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PP from "../../common/assets/rishi.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const drawerWidth = 240;

const menu = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Customer",
    link: "/customer",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Users",
    subcategoty: [
      { name: "Branch", link: "/branch" },
      { name: "User", link: "/user" },
      { name: "Role", link: "/role" },
    ],
  },
  {
    name: "Setting",
    subcategoty: [
      { name: "Setting", link: "/setting" },
      { name: "Tax Rates", link: "/tax" },
      { name: "Category", link: "/catefory" },
      { name: "Table", link: "/table" },
      { name: "Change Password", link: "/password" },
    ],
  },
];

const AuthElement = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapse, setcollapse] = useState("");
  const [setting, setSetting] = useState(false);
  console.log("setting", setting);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h2" sx={{ color: "white" }}>
          POS
        </Typography>{" "}
      </Toolbar>
      <Divider />
      <List>
        {menu.map((category) => (
          <React.Fragment key={category.name}>
            {category.link ? (
              <Link to={category.link}>
                <ListItem
                  onClick={(e) => {
                    if (collapse === category.name) {
                      setcollapse("");
                    } else {
                      setcollapse(category.name);
                    }
                  }}
                  button
                >
                  <ListItemText>{category.name}</ListItemText>

                  {category.subcategoty && (
                    <KeyboardArrowDownIcon
                      sx={
                        collapse === category.name && {
                          transform: "rotate(180deg)",
                        }
                      }
                    />
                  )}
                </ListItem>
              </Link>
            ) : (
              <ListItem
                onClick={(e) => {
                  if (collapse === category.name) {
                    setcollapse("");
                  } else {
                    setcollapse(category.name);
                  }
                }}
                button
              >
                <ListItemText>{category.name}</ListItemText>

                {category.subcategoty && (
                  <KeyboardArrowDownIcon
                    sx={
                      collapse === category.name && {
                        transform: "rotate(180deg)",
                      }
                    }
                  />
                )}
              </ListItem>
            )}

            {category.subcategoty && (
              <Collapse
                in={collapse === category.name}
                unmountOnExit
                timeout="auto"
              >
                <List disablePadding>
                  {category.subcategoty.map((subcategory) => (
                    <Link to={subcategory.link} key={subcategory.name}>
                      <ListItem button>
                        <ListItemText button sx={{ pl: 4 }}>
                          {subcategory.name}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  const Setting = () => {
    return (
      <List
        sx={{
          background: "#e0e0e0",
          position: "absolute",
          zIndex: "999",
          top: "70px",
          width: "100%",
        }}
        onMouseEnter={() => setSetting(true)}
        onMouseLeave={() => setSetting(false)}
      >
        <ListItem variant="h4" sx={{ color: "black", p: 2 }} button>
          <Typography variant="h4">Logout</Typography>
        </ListItem>
      </List>
    );
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{ display: "flex", alignItems: "center", height: "70px", p: 0 }}
        >
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
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                noWrap
                component="div"
                sx={{ color: "white" }}
              >
                POS
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", height: "100%" }}
              onMouseEnter={() => setSetting(true)}
              onMouseLeave={() => setSetting(false)}
            >
              <Avatar alt="PP" src={PP} />
              <Typography
                variant="h3"
                noWrap
                component="div"
                sx={{ color: "white", ml: 2 }}
              >
                Rishikesh Khakurel
              </Typography>
              <ArrowDropDownIcon />
              {setting && <Setting />}
            </Box>
          </Box>
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
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthElement;
