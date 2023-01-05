import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

import { Layout } from "../../components/Layout";

export const Vibration: React.FC = () => {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleVibrate = () => {
    setIsVibrating(true);
    navigator.vibrate(500);
    setTimeout(() => setIsVibrating(false), 500);
  };

  return (
    <Layout title="vibration">
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
          variant="h2"
          fontWeight={900}
          sx={{ mb: 8, color: "#00363d" }}
        >
          Click the button to test vibration
        </Typography>
        <LoadingButton
          size="large"
          loading={isVibrating}
          onClick={handleVibrate}
          loadingPosition="start"
          startIcon={isVibrating ? <SaveIcon /> : null}
          sx={{
            pl: 4,
            pr: 4,
            color: "#ffffff",
            textTransform: "none",
            backgroundColor: "#00363d",
            ":hover": {
              color: "#00363d",
              backgroundColor: "#00363d",
            },
          }}
        >
          Press me
        </LoadingButton>
      </Container>
    </Layout>
  );
};
