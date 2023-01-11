import { useState } from "react";
import Box from "@mui/material/Box";
import GoogleMap from "google-map-react";
import Snackbar from "@mui/material/Snackbar";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Layout } from "../../components/Layout";

export const Geolocation: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [location, setLocation] = useState<GeolocationCoordinates>();

  const handleLocation = () => {
    navigator.geolocation?.getCurrentPosition?.(
      ({ coords }) => setLocation(coords),
      () => setShowToast(!showToast)
    );
  };

  return (
    <Layout title="Geolocation">
      <Container
        fixed
        maxWidth="md"
        about="vibration-example"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{ mb: 8, color: "#00363d" }}
        >
          Click the button to test Geo-Location
        </Typography>
        <IconButton
          size="large"
          onClick={handleLocation}
          sx={{
            borderRadius: 1,
            color: "#ffffff",
            padding: "5px 20px",
            textTransform: "none",
            backgroundColor: "#00363d",
            ":hover": {
              color: "#00363d",
            },
          }}
        >
          <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight={400}>
            Find me
          </Typography>
        </IconButton>

        {location && (
          <Box
            sx={{
              mt: 5,
              height: 500,
              width: "100%",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <GoogleMap
              defaultZoom={18}
              defaultCenter={{
                lat: location?.latitude,
                lng: location?.longitude,
              }}
            />
          </Box>
        )}
      </Container>

      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={() => setShowToast(!showToast)}
        message="Unable to retrieve your location!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={
          <IconButton
            size="small"
            color="inherit"
            aria-label="close"
            onClick={() => setShowToast(!showToast)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Layout>
  );
};
