import { Typography , Box} from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box>
      <Typography variant="h6" align="center">
        Developed by Ritik &amp; Team
      </Typography>
      <Typography variant="h6">
        <a
          href="https://github.com/ritikmasand/React/tree/main/Project/cinematics"
          target="_blank"
          rel="noreferrer"
        >
          Github Source Code
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
