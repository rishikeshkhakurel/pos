import {
  AppBar,
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

const drawerWidth = 240;

const menu = [
  {
    name: "hi",
    subcategoty: [
      { name: "Add hi", link: "/addproduct" },
      { name: "Edit hi", link: "/editproduct" },
      { name: "Delete hi", link: "/deleteproduct" },
    ],
  },
  {
    name: "Customer",
    link: "/customer",
  },
  {
    name: "Product",
    link: "/product",
  },
];

const AuthElement = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapse, setcollapse] = useState("");

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
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ color: "white" }}
          >
            POS
          </Typography>
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
