import { Box, Typography } from '@mui/material';
import React from 'react'
import Masonry from "@mui/lab/Masonry";
import useLocalStorage from 'use-local-storage'
import FavouriteMovieCard from '../components/FavouriteMovieCard';

function Home() {
  const [favourites] = useLocalStorage("favourites" , "[]");
  return (
    <Box>
      {/* Home Page */}
     <Typography variant='h4' textAlign="center" p={2}>Welcome To My Collection</Typography>
     <Masonry columns={4} spacing={4} ml={2} >
    {JSON.parse(favourites).map((e,i)=>{
      return <FavouriteMovieCard id={e} key={i}/>
    })}
     </Masonry>
     <hr />
    </Box>
  )
}

export default Home
