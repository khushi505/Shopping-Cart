import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(id);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
