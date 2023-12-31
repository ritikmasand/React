import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { omdb } from "../utils";
import InfiniteScroll from "react-infinite-scroller";
import SingleSearchCard from "../components/SingleSearchCard";
import Stack from "@mui/material/Stack";
import Loader from "../components/Loader";

function Search() {
  const [list, setList] = useState([]);
  const [params] = useSearchParams();
  const [totalRecords, setTotalRecords] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (params.has("q") && params.get("q") !== "") {
      setList([]);
    }
  }, [params]);

  const loadData = () => {
    (async () => {
      const pageNo = Math.floor(list.length / 30) + 1;
      const response = await omdb.get(`?s=${params.get("q")}&page=${pageNo}`);
      if (response.data.Response === "False") {
        navigate("/404")
      }
      setTotalRecords(response.data.totalRecords);
      setList(response.data.Search);
      // console.log(list);
      //   setList(response.data);
      console.log(list);
    })();
  };
  // loadData();
  return (
    <>
      <Box p={5}>
        <Typography variant="h4"> {totalRecords} Results Found</Typography>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadData}
          hasMore={totalRecords == 0 || list.length < totalRecords}
          loader={<Loader/>}
        >
          <Stack spacing={3}>
            {list.map((e, idx) => {
              return <SingleSearchCard data={e} key={idx} />;
            })}
          </Stack>
        </InfiniteScroll>
      </Box>
    </>
  );
}

export default Search;
