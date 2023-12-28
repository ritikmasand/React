import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { omdb } from "../utils";
import { Box, Chip, Stack, Typography } from "@mui/material";
function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await omdb.get(`?i=${id}&plot=full`);
      setData(response.data);
    })();
  }, [id]);
  return (
    <Box>
      <Stack>
        <stack spacing={5}>
          <img
            src={
              data.Poster !== "N/A"
                ? data.Poster
                : '"https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo.png"'
            }
            alt=""
          />
          <box>
            <Typography variant="h4">{data.Title}</Typography>
            <Typography>Released : {data.Year}</Typography>
            <Typography>Crew </Typography>
            <Stack direction="row" gap={1} justifyContent="center">
              {data.Actors?.split(", ").map((e, i) => {
                return <Chip key={i} label={e}></Chip>;
              })}
              <br />
              {data.Writer?.split(", ").map((e, i) => {
                return <Chip key={i} label={e}></Chip>;
              })}
              <Chip label={data.Director}></Chip>
            </Stack>
          </box>
        </stack>
      </Stack>
    </Box>
  );
}

export default Details;
