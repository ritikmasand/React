import { CardContent, Stack, Typography, Chip, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import SIngleSearchCardSkeleton from "./SIngleSearchCardSkeleton";
import { Link } from "react-router-dom";

function SingleSearchCard({ data }) {
  const [showSkeleton , setShowSkeleton] = useState(true)
  useEffect(()=>{
    setTimeout(() => setShowSkeleton(false), 3000);
  })
  return (
    <>
      {showSkeleton ? (
        <SIngleSearchCardSkeleton />
      ) : (
        <card sx={{ display: "flex" }}>
          <Link to={`/detail/${data.imdbID}`}>
            <CardMedia
              component="img"
              sx={{ width: 260 }}
              image={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo.png"
              }
              alt="Poster image"
              title="green iguana"
            />
          </Link>
          {/* <img src={data.Poster}/> */}
          <CardContent>
            <Stack
              spacing={1}
              alignItems="flex-start"
              justifyContent="flex-start"
              // border={2}
              // width={150}
            >
              <Typography variant="h6"> {data.Title}</Typography>
              <Typography variant="subtitle" color="text.secondary">
                Released : {data.Year}
              </Typography>
              <Chip label={data.Type} sx={{ textTransform: "capitalize" }} />
            </Stack>
            {/* <Typography>{data.Writer}</Typography> */}
          </CardContent>
        </card>
      )}
    </>
  );
}

export default SingleSearchCard;
