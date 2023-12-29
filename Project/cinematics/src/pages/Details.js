import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { omdb } from "../utils";
import { Box, Chip, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useLocalStorage from "use-local-storage";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [favourites, setFavorites] = useLocalStorage("favourites", "[]");
  const [isFavourite, setFavorite] = useState(false);
  const [flag, setFlag] = useState({});
  useEffect(() => {
    const favs = JSON.parse(favourites);
    if (favs.includes(id)) {
      setFavorite(true);
    } else setFavorite(false);
  }, [favourites, id]);

  useEffect(() => {
    (async () => {
      const response = await omdb.get(`?i=${id}&plot=full`);
      setData(response.data);
    })();
  }, [id]);

  useEffect(() => {
    if (data.Country?.length > 0 ) {
      (async () => {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${
            data.Country.split(', ')[0]
          }?fullText=true`
        );
        setFlag(response.data[0]?.flags?.svg);
      })();
    }
  }, [data]);
  const toggleFavourite = () => {
    const favs = JSON.parse(favourites);
    if (isFavourite) {
      const idx = favs.indexOf(id);
      favs.splice(idx, 1);
      setFavorite(false);
    } else {
      favs.push(id);
      setFavorite(true);
    }
    setFavorites(JSON.stringify(favs));
  };
  return (
    <Box>
      <Stack p={5}>
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
            <Typography variant="h4">
              {data.Title} &nbsp;
              <IconButton color="error" size="large" onClick={toggleFavourite}>
                {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Typography>
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
              {data.Country}
            </Stack>
            <Stack mt={5} alignItems="center">
              {flag ? <img src={flag} height={40} alt="flag" /> : false}
            </Stack>
            <Typography variant="overline">
              {data.Country}
            </Typography>
          </box>
        </stack>
        <Typography variant="h4" mt={5} mb={5}>
          Plot : 
        </Typography>
      <Typography variant="h5" align="center">
        {data.Plot}
      </Typography>
      </Stack>
    </Box>
  );
}

export default Details;
