import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box,Typography } from '@mui/material'
import { omdb } from "../utils";
import InfiniteScroll from 'react-infinite-scroller'
function Search() {
  const [list, setList] = useState([]);
  const [params] = useSearchParams();
  const [totalRecords, setTotalRecords] = useState(0);
  useEffect(() => {
    if (params.has("q") && params.get("q") !== "") {
      setList([]);
    }
  }, [params]);

  const loadData = () => {
    (async () => {
      const pageNo = Math.floor(list.length / 30) + 1;
      const response = await omdb.get(`?s=${params.get("q")}&page=${pageNo}`);
      setTotalRecords(response.data.totalRecords);
      setList(response.data.Search);
    //   console.log(list);
        setList(response.data);
      console.log(list);
    })();
  };
//   loadData();
  return (
  <div>
  <Box>
    <Typography> {totalRecords} Results Found</Typography>
    <InfiniteScroll 
    pageStart={1}
    loadMore={loadData}
    ></InfiniteScroll>
  </Box>
  </div>
  )
}

export default Search;
