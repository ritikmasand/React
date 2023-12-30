import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Stack alignItems="center" mt={20} mb={20}>
        <Typography variant="h4"> Page Not Found</Typography>
        <Link to="/">Go To Home</Link>
      </Stack>
    </div>
  );
}

export default NotFound;
