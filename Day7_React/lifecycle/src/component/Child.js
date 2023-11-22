import React from "react";
import { useEffect } from "react";
function Child() {
  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  };
  // Mounting
  useEffect(() => {
    console.log("Child is mounted");
  } , []);

  // Mounting + Unmounting

  useEffect(() => {
    const intervalId = setInterval(fetchApi, 2000);

    const cleanUp = () => {
      console.log("The child compoment is unmouted .... Stopping Api calls");
      clearInterval(intervalId);
    };
    return cleanUp;
  }, []);
  return <>This is a child component</>;
}

export default Child;
