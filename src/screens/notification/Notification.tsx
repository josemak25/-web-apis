import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { Layout } from "../../components/Layout";

export const Notification: React.FC = () => {
  const handleNotification = async () => {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    }

    const permission = await window.Notification.requestPermission();

    if (permission === "granted") {
      const greeting = new window.Notification("Hi, How are you?", {
        body: "Have a good day",
        // icon: "./img/goodday.png",
        vibrate: 500,
      });

      setTimeout(() => greeting.close(), 10000);
    } else {
      handleNotification();
    }
  };

  return (
    <Layout title="notification">
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
          Click the button to show notification
        </Typography>
        <Button
          size="large"
          onClick={handleNotification}
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
        </Button>
      </Container>
    </Layout>
  );
};
