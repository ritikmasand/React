import { CardContent, Stack, Typography, Chip, CardMedia } from "@mui/material";
import React from "react";

function SingleSearchCard({ data }) {
  return (
    <>
      <card sx={{ display: "flex"} }>
        <CardMedia
          component="img"
          sx={{ width: 260, display:'inline'}}
          image={
            data.Poster !== "N/A"
              ? data.Poster
              : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo.png"
          }
          alt="Poster image"
          title="green iguana"
        />
        {/* <img src={data.Poster}/> */}
        <CardContent>
          <Stack
            spacing={1}
            alignItems="center"
            justifyContent="flex-start"
            // border={2}
            // width={150}
          >
            <Typography variant="h6"> {data.Title}</Typography>
            <Typography variant="subtitle" color='text.secondary'>Released : {data.Year}</Typography>
            <Chip label={data.Type} sx={{textTransform:'capitalize'}}/>
          </Stack>
          {/* <Typography>{data.Writer}</Typography> */}
        </CardContent>
      </card>
    </>
  );
}

export default SingleSearchCard;
