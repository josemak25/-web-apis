import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MuiAppDrawer from "@mui/material/Drawer";
import FolderIcon from "@mui/icons-material/Folder";

import { drawerWidth } from "../../constants";

interface DrawerProps {
  isDrawerOpen?: boolean;
  onChange: VoidFunction;
}

export const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen, onChange }) => (
  <MuiAppDrawer
    anchor="left"
    variant="persistent"
    open={isDrawerOpen}
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    }}
  >
    <DrawerHeader>
      <Button
        fullWidth
        onClick={onChange}
        sx={{
          m: 1,
          pl: 1.5,
          fontWeight: 400,
          textTransform: "capitalize",
          justifyContent: "flex-start",
          backgroundColor: "#E6EFFE",
        }}
        disableElevation
        startIcon={<FolderIcon sx={{ mr: 2 }} />}
      >
        Examples
      </Button>
    </DrawerHeader>
  </MuiAppDrawer>
);

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
