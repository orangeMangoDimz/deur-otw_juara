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
import DashboardImageCover2 from "../../component/DashboardImageCover2";
import DashboardImageCover3 from "../../component/DashboardImageCover3";

const Home = () => {
  return (
    <>
      <Header />
      <DashboardImageCover imgSrc="./images/cover/cover.png" />
      <DashboardImageCover2 />
      <DashboardImageCover3 />
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
