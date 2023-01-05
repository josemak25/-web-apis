import Container from "@mui/material/Container";
import { useRouteError } from "react-router-dom";
import Typography from "@mui/material/Typography";

type RouterError = {
  message?: string;
  statusText?: string;
};

export const Error: React.FC = () => {
  const error = useRouteError() as RouterError;

  return (
    <Container
      about="error-page"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography gutterBottom variant="h1" fontWeight={900}>
        Oops!
      </Typography>
      <Typography gutterBottom variant="h6">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography gutterBottom variant="body2">
        {error.statusText || error.message}
      </Typography>
    </Container>
  );
};
