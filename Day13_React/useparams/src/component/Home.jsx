import React from 'react'
import { useParams } from "react-router-dom";
function Home() {
    const params = useParams();
    console.log(params);
  return (
    <div>
      {params.key1}
    </div>
  )
}

export default Home
