import { Card, CardActions, CardMedia, Grid, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import React, { useEffect, useState } from "react";
import { omdb } from "../utils";
import { useNavigate } from "react-router-dom";

function FavouriteMovieCard({ id }) {
  const [data, setData] = useState({});
  const navigate= useNavigate()
  const clicked = () => {
   navigate(`/detail/${id}`)
  };
  useEffect(() => {
    (async () => {
      const response = await omdb.get(`?i=${id}`);
      setData(response.data);
    })();
  }, [id]);
  return (
    <div>
      <Grid item xs={3}>
        <Card>
          <CardActionArea onClick={clicked}>
            <CardMedia
              component="img"
              image={
                data.Poster !== "N/A"
                  ? data.Poster
                  : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo.png"
              }
              height={410}
              sx={{'marginLeft':4}}
            />
            <CardActions>
              <Typography variant="h6" ml={4}>{data.Title}</Typography>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}

export default FavouriteMovieCard;
