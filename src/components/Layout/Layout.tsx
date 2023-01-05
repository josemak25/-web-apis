import { Fragment } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { SxProps, Theme, useTheme } from "@mui/material/styles";

import { DrawerHeader } from "../Drawer";

type LayoutProps = React.PropsWithChildren<{
  title: string;
  sx?: SxProps<Theme>;
}>;

export const Layout = ({ sx, title, children }: LayoutProps) => {
  const { mixins } = useTheme();
  const navigate = useNavigate();

  return (
    <Fragment>
      <AppBar
        elevation={0}
        position="static"
        variant="outlined"
        color="transparent"
        sx={{ backgroundColor: "#fff" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate("/")}
            sx={{ mr: 2, color: "#000" }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: 16, color: "#000" }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          ...sx,
          height: `calc(100vh - ${Number(mixins.toolbar.minHeight) + 10}px)`,
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Fragment>
  );
};
