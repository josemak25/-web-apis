import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { drawerWidth } from "../../constants";

interface AppBarProps extends MuiAppBarProps {
  isDrawerOpen?: boolean;
  onChange?: VoidFunction;
}

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})<AppBarProps>(({ theme, isDrawerOpen }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar: React.FC<AppBarProps> = ({
  onChange,
  isDrawerOpen = false,
}) => (
  <CustomAppBar
    elevation={0}
    position="fixed"
    variant="outlined"
    isDrawerOpen={isDrawerOpen}
    sx={{ backgroundColor: "#fff" }}
  >
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        sx={{ mr: 2 }}
        color="inherit"
        onClick={onChange}
        aria-label="open drawer"
      >
        <MenuIcon sx={{ color: "#000" }} />
      </IconButton>
      <Typography
        noWrap
        variant="h6"
        fontSize={16}
        component="div"
        sx={{ color: "#000", fontWeight: "normal" }}
      >
        Examples
      </Typography>
    </Toolbar>
  </CustomAppBar>
);
