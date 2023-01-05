import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { AppBar } from "../../components/AppBar";
import { drawerWidth, webApis } from "../../constants";
import { Drawer, DrawerHeader } from "../../components/Drawer";

export const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const onThemeChange = () => setIsDarkTheme(!isDarkTheme);
  const onDrawerChange = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#F2F2F2",
      }}
    >
      <AppBar onChange={onDrawerChange} isDrawerOpen={isDrawerOpen} />
      <Drawer onChange={onDrawerChange} isDrawerOpen={isDrawerOpen} />

      <CustomMain isDrawerOpen={isDrawerOpen}>
        <DrawerHeader />
        <List>
          <ListItemButton
            disableRipple
            disableTouchRipple
            onClick={onThemeChange}
          >
            <ListItem disablePadding>
              <ListItemText primary="Dark theme" />
              <Switch
                size="medium"
                checked={isDarkTheme}
                onClick={onThemeChange}
              />
            </ListItem>
          </ListItemButton>
          <Divider />

          {webApis.map((text) => (
            <ListItemButton
              key={text}
              href={text.toLowerCase().split(" ").join("-")}
            >
              <ListItem disablePadding>
                <ListItemText primary={text} />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </CustomMain>
    </Box>
  );
};

const CustomMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})<{
  isDrawerOpen?: boolean;
}>(({ theme, isDrawerOpen }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(isDrawerOpen && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
