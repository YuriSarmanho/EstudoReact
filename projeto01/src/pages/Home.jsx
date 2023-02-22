import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { username } = useContext(AppContext);
  const { data: catData, isLoading, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      This the Home page and the user is :{username}
      <h3>{catData?.fact}</h3>
      <button onClick={refetch}>Update data</button>
    </div>
  );
};

export default Home;
