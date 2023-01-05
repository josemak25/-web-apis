import { Fragment, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopy from "@mui/icons-material/ContentCopy";
import CircularProgress from "@mui/material/CircularProgress";

import { Layout } from "../../components/Layout";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export const Clipboard: React.FC = () => {
  const [showCopy, setShowCopy] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);

  const getQuotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    setQuote(data);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quote?.quote!);
    setShowToast(!showToast);
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (!quote) {
      getQuotes();
    } else {
      interval = setInterval(getQuotes, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout
      title="Clipboard"
      sx={{
        backgroundColor: "#ebd8ea",
        ...(!quote && {
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }),
      }}
    >
      <Container
        fixed
        maxWidth="md"
        about="clipboard-example"
        sx={{
          ...(!quote && {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }),
        }}
      >
        {quote ? (
          <Fragment>
            <Typography
              variant="h2"
              fontWeight={900}
              onClick={handleCopy}
              onMouseEnter={() => setShowCopy(!showCopy)}
              onMouseLeave={() => setShowCopy(!showCopy)}
              sx={{
                mb: 8,
                cursor: "copy",
                color: "#00363d",
              }}
            >
              {quote?.quote}
              {showCopy && <ContentCopy fontSize="large" sx={{ ml: 2 }} />}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              fontWeight={900}
              sx={{ color: "#00363d", cursor: "copy", ":hover": {} }}
            >
              {quote?.author}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ color: "#00363d" }}>
              click the quote to copy it to your clipboard
            </Typography>
          </Fragment>
        ) : (
          <CircularProgress sx={{ color: "#00363d" }} />
        )}
      </Container>

      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        message="Copied quote successfully!"
        onClose={() => setShowToast(!showToast)}
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
