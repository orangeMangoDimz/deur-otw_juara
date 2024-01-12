import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../App.css"
import DashboardImageCover from "../../component/DashboardImageCover";
import RoomInspiration from "../../component/RoomInspiration";
import FeaturedItems from "./FeaturedItems";
import Client from "./Clienct";
import WhoAreWe from "./WhoAreWe";
import Ready from "./Ready";

const Home = () => {
  return (
    <>
      <Header />
      <DashboardImageCover />
      <RoomInspiration />
      <FeaturedItems />
      <Client />
      <WhoAreWe />
      <Ready />
      <Footer />
    </>
  );
};

export default Home;
