import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  return (
    <main>
      <Navbar />
      <Search />
      {isLoading ? (
        <div>
          <img className="loading-img" src={loadingImage} alt="loading" />
        </div>
      ) : (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;
