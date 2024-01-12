import React from "react";
import Header from "../../component/Header";
import "../../App.css"
import DashboardImageCover from "../../component/DashboardImageCover";
import RoomInspiration from "../../component/RoomInspiration";
import FeaturedItems from "./FeaturedItems";

const Home = () => {
  return (
    <>
      <Header />
      <DashboardImageCover />
      <RoomInspiration />
      <FeaturedItems />
    </>
  );
};

export default Home;
